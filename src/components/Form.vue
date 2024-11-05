<template>
  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#contact">Contact</a>
      </li>
      <li class="nav-item"></li>
    </ul>

    <div id="home" class="container tab-pane active">
      <form class="was-idated">
        <div class="mb-3 mt-3">
          <label for="uname" class="form-label">Họ và tên:</label>
          <input
            type="text"
            class="form-control"
            id="uname"
            placeholder="Nhập họ tên"
            required
          />
          <div class="valid-feedback">Hợp lệ</div>
          <div class="invalid-feedback">Vui lòng điền vào trường này</div>
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Mật khẩu:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Nhập mật khẩu"
            required
          />
          <div class="valid-feedback">Hợp lệ</div>
          <div class="invalid-feedback">Vui lòng điền vào trường này</div>
        </div>
        <div class="form-check mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="myCheck"
            required
          />
          <label class="form-check-label" for="myCheck"
            >Đồng ý với các điều khoản</label
          >
          <div class="valid-feedback">Hợp lệ</div>
          <div class="invalid-feedback">Tick vào hộp thoại để xác nhận</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div id="contact" class="container tab-pane fade">
      <p>Nội dung tab Contact</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPage",
};
</script>

<style></style>
