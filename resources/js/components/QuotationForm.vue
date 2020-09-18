<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">New Entry Form</h4>           
            <form @submit.prevent="editMode ? update() : quotationStore()">
              <div class="row p-3">
                <div class="col-3">                  
                  <label>To</label>
                  <div class="input-group col-xs-12">
                    <select v-model="form.vendor_id" class="form-control form-control-sm" :class="{ 'is-invalid': errors.vendor_id }">
                      <option value="">Please a select vendor</option>
                      <option v-for="(vendor, key) in vendors" :value="vendor.id" :key="key">{{ vendor.vendor_name }}</option>
                    </select>
                    <span class="input-group-append">
                      <button class="btn btn-sm btn-primary" type="button" @click="vendorCreateForm()">+</button>
                    </span>
                  </div>
                  <small class="text-danger" v-if="errors.vendor_id">{{ errors.vendor_id[0] }}</small>
                </div>
                <div class="col-7">
                  <label>Quotation Subject</label>
                  <div class="form-group">                    
                    <input type="Text" v-model="form.subject" class="form-control form-control-sm" placeholder="Enter quotation subject" :class="{ 'is-invalid': errors.subject }">
                  </div>
                  <small class="text-danger" v-if="errors.subject">{{ errors.subject[0] }}</small>
                </div>
                <div class="col-2">
                  <label>Quotation Date</label>
                  <div class="form-group">                    
                    <input type="date" v-model="form.quotation_date"  class="form-control form-control-sm" placeholder="Enter quotation date" :class="">                   
                  </div>
                  <small class="text-danger" v-if="errors.quotation_date">{{ errors.quotation_date[0] }}</small>
                </div>
              </div>
              <div class="row p-3">
                <button type="button" class="btn btn-sm btn-primary quotation-headline"> Services Description As Following Detail</button>
              </div>
              <div class="row">
                  <table class="list-table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th> &nbsp;&nbsp; Job Description</th>
                        <th>Quantity</th>
                        <th>Service Price Per Year</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in form.quotation_items" :key="index">
                          <td class="text-center">
                              {{ ++index }}
                          </td>
                          <td>
                              <input type="text" v-model="item.job_description" class="form-control form-control-sm" placeholder="Enter job description" :class="{ 'is-invalid': errors.job_description }"/><div class="v-error" v-if="errors.job_description">{{ errors.job_description[0] }}</div>
                          </td>
                          <td class="text-center">
                              <input type="number" v-model="item.quantity" min="0" class="form-control form-control-sm text-right" placeholder="Enter quantity" :class="{ 'is-invalid': errors.quantity }"/><div class="v-error" v-if="errors.quantity">{{ errors.quantity[0] }}</div>
                          </td>
                          <td class="text-center">
                              <input type="number" v-model="item.service_per_year" min="0" class="form-control form-control-sm text-right" placeholder="Enter service per year" :class="{ 'is-invalid': errors.service_per_year }"/><div class="v-error" v-if="errors.service_per_year">{{ errors.service_per_year[0] }}</div>
                          </td>                                       
                          <td class="text-center">
                              <button type='button' class="btn btn-xs btn-success" @click="addNewRow">
                                <i class="fas fa fa-plus"></i>
                                Add
                              </button>         
                              <button type="button" class="btn btn-xs btn-danger" @click="deleteRow(index, item)">
                                <i class="fas fa fa-times"></i> Delete
                                </button>
                          </td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="3" class="text-right">Total</td>
                        <td>
                            <input type="number" v-model="quotation_total" class="form-control form-control-sm text-right" placeholder="Enter service per year" readonly/>
                        </td>
                      </tr>
                      <tr class="font-weight-bold">
                          <td colspan="3" class="text-right">Total Discount</td>
                          <td><input type="number" class="form-control form-control-sm text-right" min="0" v-model="form.total_discount"/></td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="3" class="text-right capitalize">{{ require('number-to-words').toWords(total_without_discount) }} only</td>
                        <td><input class="form-control form-control-sm text-right" type="number" v-model="total_without_discount" readonly/></td>
                      </tr>
                    </tbody>
                  </table>
              </div>
              <div class="row p-2 justify-content-md-center">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>      
    </div>

    <!--vendor create modal-->
    <modal name="vendorModal" :width="690" :height="480">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Outlet</h5>
            <button type="button" class="close" @click="closeModal('vendorModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="vendorStore()">
            <div class="modal-body" ref="outletContainer">
              <div class="row p-2">
                <div class="col-4">
                    <div class="form-group">
                        <label for="vendor_name" class="form-control-label">Vendor Name</label>
                        <input type="text" v-model="vendor_form.vendor_name" class="form-control form-control-sm" placeholder="Enter vendor name" :class="{ 'is-invalid': vendor_errors.vendor_name }">                                    
                        <small class="text-danger" v-if="vendor_errors.vendor_name">{{ vendor_errors.vendor_name[0] }}</small>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="vendor_no" class="form-control-label">Vendor No.</label>
                        <input type="text" v-model="vendor_form.vendor_no" class="form-control form-control-sm" placeholder="Enter vendor no" :class="{ 'is-invalid': vendor_errors.vendor_no }">
                        <small class="text-danger" v-if="vendor_errors.vendor_no">{{ vendor_errors.vendor_no[0] }}</small>                                                
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="trn_no" class="form-control-label">Trn No.</label>
                        <input type="text" v-model="vendor_form.trn_no" class="form-control form-control-sm" placeholder="Enter trn no" :class="{ 'is-invalid': vendor_errors.trn_no }">
                        <small class="text-danger" v-if="vendor_errors.trn_no">{{ vendor_errors.trn_no[0] }}</small>    
                    </div>
                </div>
            </div>
              <div class="row p-2">
                <div class="col-4">
                    <div class="form-group">
                        <label for="telephone_no" class="form-control-label">Telephone No.</label>
                        <input type="text" v-model="vendor_form.telephone_no" class="form-control form-control-sm" placeholder="Enter telephone no" :class="{ 'is-invalid': vendor_errors.telephone_no }">
                        <small class="text-danger" v-if="vendor_errors.telephone_no">{{ vendor_errors.telephone_no[0] }}</small>   
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="attention" class="form-control-label">Attention</label>                                      
                        <input type="text" v-model="vendor_form.attention" class="form-control form-control-sm" placeholder="Enter attention" :class="{ 'is-invalid': vendor_errors.attention }">
                        <small class="text-danger" v-if="vendor_errors.attention">{{ vendor_errors.attention[0] }}</small>   
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="attention_designation" class="form-control-label">Attention Designation</label>
                        <input type="text" v-model="vendor_form.attention_designation" class="form-control form-control-sm" placeholder="Enter attention designation" :class="{ 'is-invalid': vendor_errors.attention_designation }">
                        <small class="text-danger" v-if="vendor_errors.attention_designation">{{ vendor_errors.attention_designation[0] }}</small>  
                    </div>
                </div>
                </div>
                <div class="row p-2">
                    <div class="col-4">
                        <div class="form-group">
                            <label for="email" class="form-control-label">E-mail</label>
                            <input type="text" v-model="vendor_form.email" class="form-control form-control-sm" placeholder="Enter email" :class="{ 'is-invalid': vendor_errors.email }">
                            <small class="text-danger" v-if="vendor_errors.email">{{ vendor_errors.email[0] }}</small>  
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="fax_no" class="form-control-label">Fax No.</label>
                            <input type="text" v-model="vendor_form.fax_no" class="form-control form-control-sm" placeholder="Enter fax no" :class="{ 'is-invalid': vendor_errors.fax_no }">
                            <small class="text-danger" v-if="vendor_errors.fax_no">{{ vendor_errors.fax_no[0] }}</small>  
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="address" class="form-control-label">Address</label>
                            <input type="text" v-model="vendor_form.address" class="form-control form-control-sm" placeholder="Enter address" :class="{ 'is-invalid': vendor_errors.address }">
                            <small class="text-danger" v-if="vendor_errors.address">{{ vendor_errors.address[0] }}</small>  
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
            <div class="modal-footer justify-content-md-center">
              <div class="row">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>        
    </modal>

    <vue-snotify></vue-snotify>
  </div>
</template>

<style>  
  .modal-dialog {
    max-width: 650px !important;     
  }
</style>
<script>

  import axios from '../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';

  export default {
    data: function () {
        return {
          editMode: false,
          query: '',
          queryField: 'name',
          users: [],
          pagination: {
              current_page: 1
          },
          
          including_service_id: 0,
          form: new Form({
              vendor_id: '',
              quotation_date: '',
              subject: '',
              total_discount: 0,
              total_without_discount: 0,
              quotation_items: [{
                  job_description: '',
                  quantity: 0,
                  service_per_year: 0,
              }]
          }),
          errors: [],           
          invoice_tax: 5,           
          /*******vendor area*******/
          vendor_errors: [],
          vendor_id: 0,
          vendors: [],
          vendor_form: new Form({
              vendor_name: '',
              vendor_no: '',
              trn_no: '',
              fax_no: '',
              email: '',
              attention: '',
              attention_designation: '',
              telephone_no: '',
              address: ''
          }) 
        }
      },
      mounted() {
        this.getVendorDropdowns();
      },
      computed: {
        quotation_total : function() {
            var sum = 0;
            this.form.quotation_items.forEach(e => {
                sum += parseFloat(e.service_per_year);
            });
            return sum;
        },
        total_without_discount : function() {
            return this.quotation_total -  this.form.total_discount;
        },
      },
      methods: {
        store() {
          //alert(99);
          return false;
        },
        getVendorDropdowns() {
          axios.get('/vendor-dropdown-data')
            .then((res) => {
                this.vendors = res.data;
            })
            .catch((error) => {
                console.log(error);
            })
        },
        vendorCreateForm() {
            this.vendor_form.reset();
            this.$modal.show('vendorModal')
        },
        hide() {
            this.$modal.hide('vendorModal');
        },
        vendorStore() {
          this.vendor_errors = [];
          const loader = this.$loading.show({
              container: this.$refs.quotationContainer,
              canCancel: true,
              loader: 'bars'
          })    
          axios.post('/vendors', this.vendor_form)
            .then(response => {
                if (response.status == 200) {
                    this.getVendorDropdowns();
                    this.$snotify.success('Successfully created', 'Success');
                    this.$modal.hide('vendorModal');
                    this.loader.hide();
                } else {
                    this.$snotify.error('Something went worng', 'error');
                }
            })
            .catch( errors => {
                console.log(errors.response);
                this.vendor_errors = errors.response.data.errors;
            })
            .finally(e => {
                loader.hide();
            })
          },
            /*********end vendor area*******/
            /*********invoice area**********/
            deleteRow(index, item) {
                var idx = this.quotation_items.indexOf(item);
                console.log(idx, index);
                if (idx > -1) {
                    this.quotation_items.splice(idx, 1);
                }
                this.calculateTotal();
            },
            addNewRow() {
                this.form.quotation_items.push({
                    job_description: '',
                    quantity: 0,
                    service_per_year: 0,
                });
            },
            reset() {
                this.form.reset()
                this.form.clear()
            },
            closeModal(modalName) {
              this.$modal.hide(modalName);
            },
            /*********end invoice area******/
            quotationStore() {
                const loader = this.$loading.show({
                   container: this.$refs.quotationContainer,
                   canCancel: true,
                   loader: 'bars'
                })         
                axios.post('/quotations', this.form)
                    .then(response => {
                        if (response.status == 200) {
                            this.errors = [];
                            this.$snotify.success('Successfully created', 'Success');
                            this.$router.push({ name: 'quotations' });   
                           // this.form.reset();
                            this.loader.hide();                            
                            //$('.v-error').empty();
                            //this.$router.push({ name: 'users' });
                        } else {
                            this.$snotify.error('Something went worng', 'error');
                        }
                    })
                    .catch(this.setErrors)
                    .finally(e => {
                        loader.hide();
                    })                
            },
            show(user) {
              this.form.reset();
              this.form.fill(user);
              $("#showModal").modal("show");
              console.log(user);
            },
            edit(user) {
                this.editMode = true
                this.form.reset()
                this.form.clear()
                this.form.fill(user)              
                $('#cutomerModalLong').modal('show');
            },
            update() {
                this.form.busy = true;
                this.form.put('/api/users/'+this.form.id)
                    .then(response => {
                        this.getData();
                        $('#cutomerModalLong').modal('hide');
                        if (this.form.successful) {
                            this.$snotify.success('Successfully updated', 'Success');
                            this.form.reset();
                            this.form.clear();
                        } else {
                            this.$snotify.error('Something went worng', 'error');
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            setErrors(err) {            
                this.errors = err.response.data.errors;
            }
        }
  }
</script>