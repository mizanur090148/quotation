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
		visitSchedules: [
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
    this. getStoreInfo();
  },
  methods: {
      getStoreInfo() {
        const loader = this.$loading.show({
           container: this.$refs.attendanceTable,
           canCancel: true,
           loader: 'bars'
        })
        axios.get('store-info?page='+this.pagination.current_page)
          .then((res) => {
            this.store_info = res.data.content.data;
            this.pagination = res.data.content;
            console.log(res.data.content);
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