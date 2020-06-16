const axios = require('axios');
require('should');
const headers = { 'Content-Type': 'application/json' };
const cases = [
  {a: 3},
  {a: 4},
  {a: -1}
];
cases.forEach(({a}) => {
  describe(a + ' Проверка тождественности', () =>
    it ('should ', async() => {
      const URL = `https://kodaktor.ru/api2/there/${a}`;
      const {data : s} = await axios.get(URL, { headers });
      const URL2 = `http://kodaktor.ru/api2/andba/${s}`;
      const {data : s2} = await axios.get(URL2, { headers });
      s2.should.equal(a);
      })
    );
  }
);
