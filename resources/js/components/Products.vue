
<script setup>
import { ref } from 'vue';

const date = ref();

  const startDate = ref(new Date(2022, 6));

</script>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
    };
  }
}
</script>


        <template>
            <h2 style="
            width: 100%;
            height: 150px;
            background-color: rgba(2, 56, 2, 0.1);
            border-radius: 7px;
            font-size: 30px;
            text-align: center;">

                Data para busca
                (a partir de 27/07/2022 - 09/12/2022)

            <VueDatePicker v-model="date"
             range
             :start-date="startDate" placeholder="Select Date"
             :min-date="new Date(2022, 6, 27)"
             :max-date="new Date(2022, 11, 9)"
             style="width: 400px;height: 50px;top: 15%;left: 38%;"/>
            </h2>

            <input type='button' @click='recordByID()' value='Buscar'>

            <table border='1' width='80%' style='border-collapse: collapse;'>
     <tr>
       <th>ingrediente1</th>
       <th>ingrediente2</th>
       <th>ingrediente3</th>
       <th>ingrediente4</th>
       <th>ingrediente5</th>
       <th>ingrediente6</th>
       <th>Total</th>
     </tr>
     <tr v-for='ingredientes in db_desafio1'>
       <td>{{ Ingrediente_1 }}</td>
       <td>{{ Ingrediente_2 }}</td>
       <td>{{ Ingrediente_3 }}</td>
       <td>{{ Ingrediente_4 }}</td>
       <td>{{ Ingrediente_5 }}</td>
       <td>{{ Ingrediente_6 }}</td>
       <td>{{ Total }}</td>
     </tr>
   </table>



            {{ date }}

        </template>

