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
      events: [
        /* {
          title: 'test',
          allDay: true,
          start: moment(),
          end: moment().add(1, 'd'),
        },
        {
          title: 'another test',
          start: '2021-02-01',
          end: '2021-02-05',
        }, */
      ],
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
        .then((res) => {console.log(res.data);
          this.events = res.data;
          $.each(res.data, function(index, data) {
            console.log(index+"=>"+data);
          });
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