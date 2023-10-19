<script setup>
import { ref, onMounted } from 'vue';

const date = ref();

onMounted(() => {
  const startDate = new Date();
  const endDate = new Date();
  date.value = [startDate, endDate];
})
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
            <h2 style="width: 100%;height: 500px;background-color: rgba(2, 56, 2, 0.1);border-radius: 7px; font-size: 30px;text-align: center;">

                Data para busca
                (a partir de 27/07/2022 - 09/12/2022)

            <VueDatePicker v-model="date" range style="width: 400px;height: 50px;top: 15%;left: 38%;"/>
            </h2>

            {{ date }}

        </template>

