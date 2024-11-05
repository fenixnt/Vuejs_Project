<template>
  <div className="container">
    <table className="table table-hover">
      <thead>
        <tr>
          <td>Họ và tên</td>
          <td>Mail</td>
          <td>Số điện thoại</td>
        </tr>
        <tr>
          <td>Nguyễn Thái Bình</td>
          <td>binhnguyen0203@gmail.com</td>
          <td>09349491067</td>
        </tr>
        <tr>
          <td>Nguyễn Thái Bình</td>
          <td>binhnguyen0203@gmail.com</td>
          <td>09349491067</td>
        </tr>
        <tr>
          <td>Nguyễn Thái Bình</td>
          <td>binhnguyen0203@gmail.com</td>
          <td>09349491067</td>
        </tr>
      </thead>
    </table>
    <i class="bi-bag-dash"></i>

    <div class="btn-group">
      <button class="btn btn-primary"></button>
      <button class="btn btn-primary">
        <span class="spinner-border spinner-border-sm"></span> Loading..
      </button>
      <button class="btn btn-primary" disabled>
        <span class="spinner-border spinner-border-sm"></span> Loading..
      </button>
      <button class="btn btn-warning" disabled>btn-warning</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style></style>
