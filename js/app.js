'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function ranCustomerNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seatle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  totalCookies: 0,
  cookieArray: [],
  getCustomerNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerNum = ranCustomerNum(this.minCust, this.maxCust);
      let cookieTotal = Math.ceil(customerNum * this.avgCookieSale);
      this.cookieArray.push(cookieTotal);
      this.totalCookies += cookieTotal;
    }
  },
  displayResults: function () {
    let valueList = document.getElementById('valuelist');

    let title = document.createElement('h2');
    title.textContent = this.name;
    valueList.appendChild(title);

    let ul = document.createElement('ul');
    valueList.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
      let listElement = document.createElement('li');
      listElement.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
      ul.appendChild(listElement);
    }

    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(cookieTotal);
  }
};

seatle.getCustomerNum();
seatle.displayResults();
console.log(seatle);



let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  totalCookies: 0,
  cookieArray: [],
  getCustomerNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerNum = ranCustomerNum(this.minCust, this.maxCust);
      let cookieTotal = Math.ceil(customerNum * this.avgCookieSale);
      this.cookieArray.push(cookieTotal);
      this.totalCookies += cookieTotal;
    }
  },
  displayResults: function () {
    let valueList = document.getElementById('valuelist');

    let title = document.createElement('h2');
    title.textContent = this.name;
    valueList.appendChild(title);

    let ul = document.createElement('ul');
    valueList.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
      let listElement = document.createElement('li');
      listElement.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
      ul.appendChild(listElement);
    }

    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(cookieTotal);
  }
};

tokyo.getCustomerNum();
tokyo.displayResults();
console.log(tokyo);



let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  totalCookies: 0,
  cookieArray: [],
  getCustomerNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerNum = ranCustomerNum(this.minCust, this.maxCust);
      let cookieTotal = Math.ceil(customerNum * this.avgCookieSale);
      this.cookieArray.push(cookieTotal);
      this.totalCookies += cookieTotal;
    }
  },
  displayResults: function () {
    let valueList = document.getElementById('valuelist');

    let title = document.createElement('h2');
    title.textContent = this.name;
    valueList.appendChild(title);

    let ul = document.createElement('ul');
    valueList.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
      let listElement = document.createElement('li');
      listElement.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
      ul.appendChild(listElement);
    }

    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(cookieTotal);
  }
};

dubai.getCustomerNum();
dubai.displayResults();
console.log(dubai);



let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  totalCookies: 0,
  cookieArray: [],
  getCustomerNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerNum = ranCustomerNum(this.minCust, this.maxCust);
      let cookieTotal = Math.ceil(customerNum * this.avgCookieSale);
      this.cookieArray.push(cookieTotal);
      this.totalCookies += cookieTotal;
    }
  },
  displayResults: function () {
    let valueList = document.getElementById('valuelist');

    let title = document.createElement('h2');
    title.textContent = this.name;
    valueList.appendChild(title);

    let ul = document.createElement('ul');
    valueList.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
      let listElement = document.createElement('li');
      listElement.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
      ul.appendChild(listElement);
    }

    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(cookieTotal);
  }
};

paris.getCustomerNum();
paris.displayResults();
console.log(paris);



let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  totalCookies: 0,
  cookieArray: [],
  getCustomerNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerNum = ranCustomerNum(this.minCust, this.maxCust);
      let cookieTotal = Math.ceil(customerNum * this.avgCookieSale);
      this.cookieArray.push(cookieTotal);
      this.totalCookies += cookieTotal;
    }
  },
  displayResults: function () {
    let valueList = document.getElementById('valuelist');

    let title = document.createElement('h2');
    title.textContent = this.name;
    valueList.appendChild(title);

    let ul = document.createElement('ul');
    valueList.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
      let listElement = document.createElement('li');
      listElement.textContent = `${hours[i]}: ${this.cookieArray[i]} cookies`;
      ul.appendChild(listElement);
    }

    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(cookieTotal);
  }
};

lima.getCustomerNum();
lima.displayResults();
console.log(lima);
