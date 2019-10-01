<!-- Список должников -->
<template>
  <div>
    <h2>Долги:</h2>
    <table class="table">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ФИО</th>
              <th scope="col">Задолженность</th>
              <th scope="col">Период</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in info" :key="index">
              <td scope="row">{{item.id_person}}</td>
              <td>{{item.fio}}</td>
              <td>-</td>
              <td>-</td>
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
      info: null
    };
  },
  mounted() {
    Axios
      .get('/api/v1/person')
      .then(response => (this.info = response.data.data));
  }
}
</script>