<!-- Список должников -->
<template>
  <div>
    <h2>Таблица портфелей:</h2>
    <br>
    <table class="table">
        <thead>
            <tr>
              <th scope="col">ID портфеля</th>
              <th>Имя портфеля</th>
              <th>Дата начала</th>
              <th>Дата окончания</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in info" :key="index">
              <td>{{item.id_portfolio}}</td>
              <td>{{item.portfolio_name}}</td>
              <td>{{item.sign_date}}</td>
              <td>{{item.end_date}}</td>
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
      .get('/api/v1/portfolio')
      .then(response => (this.info = response.data.data));
  },
}
</script>