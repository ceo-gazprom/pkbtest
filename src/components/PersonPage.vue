<!-- Список должников -->
<template>
  <div>
    <h2>Должники:</h2>
    <p>
      1. Для таблицы должников добавьте возможность сортировки по FIO<br>
      2.Реализуйте inline-редактирование FIO во Vue компоненте
    </p>
    <table class="table">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th @click="sort()" scope="col">FIO</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in info" :key="index">
              <td scope="row" @click="edit($event)">{{item.id_person}}</td>
              <td><div contenteditable="" @keydown.enter.prevent="send($event, item.id_person)">{{item.fio}}</div></td>
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
      sortFlag: false
    };
  },
  mounted() {
    Axios
      .get('http://localhost:3000/api/v1/person')
      .then(response => (this.info = response.data.data));
  },

  methods: {
    edit(e) {
      console.log('obj', e);
    },
    send(e, idRow) {
      e.target.blur();
      console.log(idRow);
    },
    // Метод сортировки столбца
    sort(){
      // this.cahngeSort;
        // Изменение флага сортировки
        this.sortFlag = !this.sortFlag

        // Сортировка
        this.info.sort(
          (a, b) => {
            console.log('aue');
            if (a['fio'] > b['fio']) {
              return this.sortFlag ? 1 : -1
            }
            if (a['fio'] < b['fio']) {
              return this.sortFlag ? -1 : 1
            }
            // a должно быть равным b
            return 0;
          }
        );
    }
  }
}
</script>