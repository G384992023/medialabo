
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.coord.lon);
  console.log(data.coord.lat);
  console.log(data.weather[0].description);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.main.humidity);
  console.log(data.wind.speed);
  console.log(data.wind.deg);
  console.log(data.name);
  
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
let d = document.createElement('div');
d.setAttribute('id','result');
let a = document.querySelector('body');
a.insertAdjacentElement('beforeend',d);

let de = document.createElement('ul');
d.insertAdjacentElement('beforeend',de);
let p1 =document.createElement('li');

p1.textContent=data.coord.lon;
de.insertAdjacentElement('beforeend',p1);

let p2 =document.createElement('li');
p2.textContent=data.coord.lat;
de.insertAdjacentElement('beforeend',p2);

let p3 =document.createElement('li');
p3.textContent=data.weather[0].description;
de.insertAdjacentElement('beforeend',p3);

let p4 =document.createElement('li');
p4.textContent=data.main.temp_min;
de.insertAdjacentElement('beforeend',p4);

let p5 =document.createElement('li');
p5.textContent=data.main.temp_max;
de.insertAdjacentElement('beforeend',p5);

let p9 =document.createElement('li');
p9.textContent=data.main.humidity;
de.insertAdjacentElement('beforeend',p9);

let p6 =document.createElement('li');
p6.textContent=data.wind.speed;
de.insertAdjacentElement('beforeend',p6);

let p7 =document.createElement('li');
p7.textContent=data.wind.deg;
de.insertAdjacentElement('beforeend',p7);

let p8 =document.createElement('li');
p8.textContent=data.name;
de.insertAdjacentElement('beforeend',p8);
}

// 課題5-1 のイベントハンドラの定義
function show() {


}

// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

