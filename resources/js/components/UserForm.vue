<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">New Entry Form</h4>           
            <form class="forms-sample" @click="store">
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label> First Name</label>
                    <input type="text" class="form-control form-control-sm" id="first_name" placeholder="Enter first name">
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control form-control-sm" id="last_name" placeholder="Enter last name">
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Mobile No.</label>
                    <input type="text" class="form-control form-control-sm" id="mobile_no" placeholder="Enter mobile no">
                  </div>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" class="form-control form-control-sm" id="email" placeholder="Enter email">
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Designation</label>
                    <input type="text" class="form-control form-control-sm" id="address" placeholder="Enter address">
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control form-control-sm" id="address" placeholder="Enter address">
                  </div>
                </div>                
              </div>
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Outlet</label>
                    <select name="outlet_id" class="form-control form-control-sm">
                      <option>Outlet1</option>
                      <option>Outlet2</option>
                      <option>Outlet3</option>
                    </select>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Role</label>
                    <select name="role_id" class="form-control form-control-sm">
                      <option>User</option>
                      <option>Admin</option>
                      <option>Super Admin</option>
                    </select>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Staus</label>
                    <select name="size_id" class="form-control form-control-sm">
                      <option>Inactive</option>
                      <option>Active</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control form-control-sm" id="address" placeholder="Enter address">
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Confirmed Password</label>
                    <input type="password" class="form-control form-control-sm" id="address" placeholder="Enter address">
                  </div>
                </div>
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
  </div>
</template>

<script>
  export default {
      data: function () {
          return {
            editMode: false
          }
        },
      methods: {
        store() {
          //alert(99);
          return false;
        }
      }
  }
</script>