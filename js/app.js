'use strict';
let storeForm = document.getElementById('store-form');
let storeSection = document.getElementById('store-profiles');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(storeSection);

function ranCustomerNum(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

let storeSelection = [];

function Store(storeLocation, minCust, maxCust, avgCookiesSale) {
  this.storeLocation = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookiesSale;
  this.totalCookies = 0;
  this.numCookiesSold = 0;
  this.cookieArray = [];
  this.avgCookieSold();
  storeSelection.push(this);
}


Store.prototype.ranCustomerNum = function () {
  this.ranCustomerNum = `${ranCustomerNum(this.minCust, this.maxCust)}`;
};

Store.prototype.avgCookieSold = function () {
  for (let i = 0; i < hours.length; i++) {
    let numCookiesSold = Math.ceil(ranCustomerNum(this.minCust, this.maxCust) * this.avgCookieSale);
    this.totalCookies = this.totalCookies + numCookiesSold;
    this.cookieArray.push(numCookiesSold);
  }
};

Store.prototype.render = function () {
  let trOneElem = document.createElement('tr');
  storeSection.appendChild(trOneElem);
  let dataCell = document.createElement('td');
  dataCell.textContent = this.storeLocation;
  trOneElem.appendChild(dataCell);


  for (let i = 0; i < hours.length; i++) {
    let dataCell = document.createElement('td');
    dataCell.textContent = this.cookieArray[i];
    trOneElem.appendChild(dataCell);
  }

  let cookieTotal = document.createElement('td');
  cookieTotal.textContent = this.totalCookies;
  trOneElem.appendChild(cookieTotal);
};

function renderAllStores() {
  for (let i = 0; i < storeSelection.length; i++) {
    storeSelection[i].render();
  }
}

function tHeader() {
  let newRow = document.createElement('tr');
  storeSection.appendChild(newRow);
  let newTableHead = document.createElement('th');
  newRow.appendChild(newTableHead);
  newTableHead.textContent = 'Store Location';
  for (let i = 0; i < hours.length; i++) {
    let th1Elem = document.createElement('th');
    newRow.appendChild(th1Elem);
    th1Elem.textContent = `${hours[i]}`;
  }
  let totalTableHead = document.createElement('th');
  newRow.appendChild(totalTableHead);
  totalTableHead.textContent = 'Daily Total';
}

function setTableFooter() {
  let footElem = document.createElement('tfoot');
  storeSection.appendChild(footElem);
  let newRow = document.createElement('tr');
  footElem.appendChild(newRow);

  let tdElem = document.createElement('td');
  tdElem.textContent = 'Totals';
  newRow.appendChild(tdElem);

  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hTotal = 0;
    for (let j = 0; j < storeSelection.length; j++) {
      hTotal += storeSelection[j].cookieArray[i];
      grandTotal += storeSelection[j].cookieArray[i];
    }
    let dataCell = document.createElement('td');
    dataCell.textContent = `${hTotal}`;
    newRow.appendChild(dataCell);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = grandTotal;
  newRow.appendChild(totalCell);
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


tHeader();
renderAllStores();
setTableFooter();

function handleSubmit(event) {
  event.preventDefault();

  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookieSale = +event.target.maxCust.value;
  let storeLocation = event.target.storeLocation.value;
  document.querySelector('tfoot').remove();

  let newLocation = new Store(storeLocation, minCust, maxCust, avgCookieSale);

  newLocation.render();
  setTableFooter();

  storeForm.reset();
}

storeForm.addEventListener('submit', handleSubmit);
