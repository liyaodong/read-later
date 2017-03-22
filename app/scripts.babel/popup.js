'use strict';

const KEY = '__read-later__';
const $form = $('#new-item');
const $result = $('#stored-list');
const template = {
  add: $('#template-add').html(),
  item: $('#template-item').html(),
};
const storage = {
  env: chrome.storage.local,
  clear() {
    this.env.clear();
  },
  get(){
    return new Promise(res => {
      this.env.get(KEY, data => res(data[KEY] || []));
    });
  },
  add(obj){
    this.get().then(data => {
      const newItem = obj;
      const existItem = data.find(x => x.url === obj.url);
      if (existItem) {
        this.env.set({ [KEY]: data.map(x => x.url === obj.url ? obj : x) });
      } else {
        this.env.set({ [KEY]: [...data, newItem] });
      }
    });
  },
  remove(url) {
    this.get().then(data => {
      this.env.set({ [KEY]: data.filter(x => x.url !== url) });
    });
  }
};

// auto fill new item infomation
prepareAddNew();
getList();
listenResult();

$form.on('submit', saveTo)

function saveTo(e) {
  e.preventDefault();
  let data = {};
  $form.find('input, select').each(function() {
    data[$(this).data('name')] = $(this).val();
  });
  getCurrentTab().then(tab => {
    const { url } = tab;
    const storeData = Object.assign({}, data,
      { url, icon: tab.favIconUrl }
    );
    storage.add(storeData);
  });

  window.close();
}

function getList() {
  Mustache.parse(template.item);
  storage.get().then(list => {
    const result =list.reduce((acc, x) => acc + Mustache.render(template.item, x), '');
    $result.html(result);
  });
}

function prepareAddNew() {
  getCurrentTab().then(tab => {
    const newItem = {
      title: tab.title,
      date: {
        first: 0,
        second: 1,
        three: 2
      }
    };
    const html = Mustache.render(template.add, newItem);
    $form.prepend(html);
  });
}

function getCurrentTab() {
  return new Promise(res => {
    chrome.tabs.query({currentWindow: true, active: true}, tab => {
      res(tab[0]);
    });
  });
}

function listenResult() {
  $result.on('click', 'a', function() {
    const url = $(this).attr('href');
    storage.remove(url);
    chrome.tabs.create({ url });
  });
}
