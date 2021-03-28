import Vue from 'vue'
import moment from 'moment'

Vue.mixin({
    methods: {
        capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        todoStatus(status) {
            let result = '';
            if (status == 0) {
                result = '<span class="text-primary">Pending</span>'
            } else if (status == 1) {
                result = '<span class="text-danger">Blocked</span>'
            }  else if (status == 1) {
                result = '<span class="text-secondary">Running</span>'
            } else {
                result = '<span class="text-success">Completed</span>'
            }
            return result;
        },
        format_date(value){
            if (value) {
                return moment(String(value)).format('YYYY-MM-DD')
            }
        },
        format_date_time(value){
            if (value) {
                return moment(String(value)).format('YYYY-MM-DD : HH:mm')
            }
         },
    }
})