<template>
  <div>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">1. Задолженность свыше 150 рублей</h4>
      <hr>
      <p class="mb-0">
        Выбрать должников с суммой к взысканию (сумма всех долгов должника) более 150 рублей
      </p>
    </div>

    <table class="table table-dark">
        <thead>
            <tr>
              <th scope="col">ФИО</th>
              <th scope="col">Сумма к взысканию</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in info" :key="index">
              <td scope="row">{{item.fio}}</td>
              <td>{{item.debt_sum}}</td>
          </tr>
        </tbody>
    </table>

    <br><br><br>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">2. Портфель в работе</h4>
      <hr>
      <p class="mb-0">
        На каждый месяц посчитать портфель в работе.
        Портфель в работе – сумма долгов, которые находились в работе хотя бы один день в месяце
      </p>
    </div>
    <table class="table table-dark">
        <thead>
            <tr>
              <th scope="col">Дата</th>
              <th scope="col">Сумма долгов в работе</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in portfolioProgress" :key="index">
              <td>{{parseDate(item.cal_date)}}</td>
              <td scope="row">{{item.sum}}</td>
          </tr>
        </tbody>
    </table>

    <br><br><br>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">3. Посчитать эффективность по каждому портфелю</h4>
      <hr>
      <p class="mb-0">
        сумма всех платежей/сумма всех долгов
      </p>
    </div>
    <table class="table table-dark">
        <thead>
            <tr>
              <th scope="col">Имя портфеля</th>
              <th scope="col">Эффективность</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in portfolioEfficiency" :key="index">
              <td>{{item.portfolio_name}}</td>
              <td scope="row">{{item.coalesce}} %</td>
          </tr>
        </tbody>
    </table>

    <br><br><br>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">4. Посчитать эффективность в каждый месяц</h4>
      <hr>
      <p class="mb-0">
        сумма всех платежей за месяц/портфель в работе за месяц
      </p>
    </div>
        <table class="table table-dark">
        <thead>
            <tr>
              <th scope="col">Дата</th>
              <th scope="col">Эффективность портфеля</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in portfolioEfficiencyDate" :key="index">
              <td>{{parseDate(item.cal_date)}}</td>
              <td scope="row">{{item.round}} %</td>
          </tr>
        </tbody>
    </table>

    <br><br><br>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">5. Выбрать все долги без платежей</h4>
    </div>
    <table class="table table-dark">
        <thead>
            <tr>
              <th scope="col">id задолженности</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in debtNopayment" :key="index">
              <td scope="row">{{item.id_debt}}</td>
          </tr>
        </tbody>
    </table>


  </div>

</template>
<script>
import Axios from 'axios';

export default {
  data() {
    return {
      info: null,
      portfolioProgress: null,
      portfolioEfficiency: null,
      portfolioEfficiencyDate: null,
      debtNopayment: null,
    };
  },
  mounted() {
    // Подгружаем данные должников
    Axios
      .get('/api/v1/person/over')
      .then(response => (this.info = response.data.data));
    
    // Подгружаем данные портфелей
    Axios
      .get('/api/v1/portfolio/progress')
      .then(response => (this.portfolioProgress = response.data.data));
    
    // Подгружаем список портфелей и их эфеективность
    Axios
      .get('/api/v1/portfolio/efficiency')
      .then(response => (this.portfolioEfficiency = response.data.data));
    
    // Подгружаем эфеективность по месяцам
    Axios
      .get('/api/v1/portfolio/efficiency/date')
      .then(response => (this.portfolioEfficiencyDate = response.data.data));

    // Подгружаем долги без платежей
    Axios
      .get('/api/v1/debt/nopayment')
      .then(response => (this.debtNopayment = response.data.data));

  },
  methods: {
    parseDate(date) {
      function zeroPad(d) {
        return ("0" + d).slice(-2)
      }
      var parsed = new Date(date)
      return [zeroPad(parsed.getDate()), zeroPad(parsed.getMonth() + 1), parsed.getUTCFullYear(),].join(".");

    }
  }
}
</script>