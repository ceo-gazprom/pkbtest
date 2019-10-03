<!-- Список должников -->
<template>
  <div>
    <h2>Таблица платежей:</h2>
    <br>
    <table class="table">
        <thead>
            <tr>
              <th scope="col">ID задолжности</th>
              <th>Сумма платежа</th>
              <th>Дата</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in info" :key="index">
              <td>{{item.id_debt}}</td>
              <td>{{item.payment_sum}}</td>
              <td>{{item.date}}</td>
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
    };
  },
  mounted() {
    Axios
      .get('/api/v1/payment')
      .then(response => (this.info = response.data.data));
  },
}
</script>