<template>
	<full-calendar :config="config" :events="events"/>
</template>

<script>
import 'fullcalendar/dist/fullcalendar.css'
import moment from 'moment'
export default {
  name: 'hello',
  data () {
    return {
			events: [
				{
					title: 'test',
					allDay: true,
					start: moment(),
					end: moment().add(1, 'd'),
				},
				{
					title: 'another test',
					start: '2021-02-01',
					end: '2021-02-05',
				},
			],
			config: {
        defaultView: 'month',
				eventRender: function(event, element) {
        	console.log(event)
    		}
      },
    }
  },
  mounted() {
    //alert(moment().add(2, "d"));
  },
}
</script>