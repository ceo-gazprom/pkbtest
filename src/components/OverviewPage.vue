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
              <th scope="col">#</th>
              <th scope="col">ФИО</th>
              <th scope="col">Сумма к взысканию</th>

            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in info" :key="index">
              <td>{{index}}</td>
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
              <th scope="col">id</th>
              <th scope="col">Portfolio name</th>
              <th scope="col">Date</th>

            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in portfolio" :key="index">
              <td>{{item.id_portfolio}}</td>
              <td scope="row">{{item.portfolio_name}}</td>
              <td>{{item.sign_date}} - {{item.end_date}}</td>
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

    <br><br><br>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">4. Посчитать эффективность в каждый месяц</h4>
      <hr>
      <p class="mb-0">
        сумма всех платежей за месяц/портфель в работе за месяц
      </p>
    </div>

    <br><br><br>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">5. Выбрать все долги без платежей</h4>
    </div>
    <table class="table table-dark">
        <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Portfolio name</th>
              <th scope="col">Date</th>

            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in portfolio" :key="index">
              <td>{{item.id_portfolio}}</td>
              <td scope="row">{{item.portfolio_name}}</td>
              <td>{{item.sign_date}} - {{item.end_date}}</td>
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
      portfolio: null,
    };
  },
  mounted() {
    // Подгружаем данные должников
    Axios
      .get('/api/v1/person/over')
      .then(response => (this.info = response.data.data));
    
    // Подгружаем данные портфелей
    Axios
      .get('/api/v1/portfolio')
      .then(response => (this.portfolio = response.data.data));
  }
}
</script>