<template>
	<full-calendar :config="config" :events="events"/>
</template>

<script>
import axios from '../../axios'
import 'fullcalendar/dist/fullcalendar.css'
import moment from 'moment'

export default {
  name: 'hello',
  data () {
    return {
      events: [],
      config: {
        defaultView: 'month',
        eventRender: function(event, element) {
          console.log(event)
        }
      }
    }
  },
  mounted() {
    this. getVisitSchedules();
  },
  methods: {
    getVisitSchedules() {
      const loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      })
      axios.get('get-visit-schedule-data')
        .then((res) => {
          this.events = res.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          loader.hide();
        });
    }
  }
}
</script>

<style>
  tr {
    height: 5px !important;
    width: 5px !important;
  }
  th, td {
    height: 5px !important;
    width: 5px !important;
  }
</style>