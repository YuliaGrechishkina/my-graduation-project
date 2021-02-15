<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h1>заповніть форму</h1>
          <button type="button" class="btn-close" @click="close">
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <div class="modal__content">
            <form id="appointment-quick-form" class="form" novalidate="">
              <div class="inputWrap__input">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  name="name"
                  class="input input_text"
                  placeholder="Як до вас звертатись?"
                  data-parsley-length="[2, 24]"
                  required=""
                />
              </div>

              <div class="inputWrap__input">
                <i class="fas fa-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  class="input input_tel"
                  placeholder="Номер телефону"
                  data-parsley-pattern="^[\d\+\-\.\(\)\/\s]*$"
                  required=""
                />
              </div>

              <div class="inputWrap__input inputWrap__input-last">
                <i class="fas fa-th-list"></i>
                <div class="selectric-hide-select">
                  <select name="service" class="select" tabindex="-1">
                    <option value="">Оберіть розділ</option>
                    <option value="Усі послуги для чоловіків"
                      >Усі послуги для чоловіків</option
                    >
                    <option value="Стрижки / Укладання /Фарбування">
                      Стрижки / Укладання /Фарбування</option
                    >
                    <option value="Косметологія"> Косметологія</option>
                    <option value="Манікюр / Педикюр / Подологія"
                      >Манікюр / Педикюр / Подологія</option
                    >
                    <option value="Макіяж / Брови / Вії"
                      >Макіяж / Брови / Вії</option
                    >
                    <option value="Татуаж">Татуаж</option>
                    <option value="Масаж">Масаж</option>
                    <option value="Депіляція">Депіляція</option>

                    <option value="Подарункові сертифікати"
                      >Подарункові сертифікати</option
                    >
                    <option value="Магазин">Магазин</option>
                  </select>
                </div>
              </div>

              <div class="inputWrap__input">
                <i class="fas fa-comments"></i>
                <input
                  class="selectric-input"
                  tabindex="0"
                  placeholder="Введіть послугу"
                />
              </div>

              <div class="inputWrap__input">
                <i class="fas fa-calendar-alt"></i>
                <input
                  class="input input_date"
                  type="date"
                  value="2020-02-8"
                  min="2020-02-8"
                  max="2050-02-7"
                />
              </div>

              <div class="inputWrap__input">
                <i class="fas fa-clock"></i>
                <input
                  class="input input_time"
                  type="time"
                  id="appt"
                  name="appt"
                  min="09:00"
                  max="20:00"
                  required
                />
              </div>
            </form>
          </div>
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <div class="form__submit">
            <input type="submit" class="btn-green" value="записатися" />
          </div>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowModal",

  data() {
    return {
      loading: false,
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
 
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
  padding: 0 5%;
  background-image: url(../assets/4.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
    width: 75%;
    height: 70%;
  }
  @media (min-width: 992px) {
    width: 55%;
    height: 70%;
    margin-left: -10%;
  }
  @media (min-width: 1200px) {
    width: 40%;
    height: 70%;
    margin-left: 0;
  }
}

.modal__content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-header {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #ffff;
  color: #ffff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 15px;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 40px;
}

.modal-body {
  position: relative;
  padding: 10px 50px;
  height: 75%;
}

.btn-close {
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #ffff;
  background: transparent;
  position: absolute;
  top: -10%;
  right: 0;
  font-size: 25px;
}

.btn-green {
  color: #fff;
  background-color: #18522d;
  border: 1px solid #fff;
  font-size: 20px;
  text-transform: uppercase;
  padding: 3%;
  box-shadow: 14px 19px 20px 0px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 14px 19px 20px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 14px 19px 20px 0px rgba(0, 0, 0, 0.71);
}

.modal-header h1 {
  width: 70%;
}

.btn-close:hover {
  color: #ffffff;
  background-color: #18522d;
}

.btn-green:hover {
  background-color: #18522d;
  transform: scale(1.3);
  color: #fff;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
}

.fas {
  font-size: 25px;
  color: #18522d;
  margin-right: 30px;
}

.inputWrap__input {
  height: 15%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
  margin-right: 5%;
  width: 100%;
  justify-content: start;
  align-items: center;
}

select {
  height: 100%;
  box-shadow: 10px 13px 20px 0px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 10px 13px 20px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 10px 13px 20px 0px rgba(0, 0, 0, 0.71);
  border: 2px solid #000;
  margin-left: 1.5%;
}

input {
  height: 100%;
  box-shadow: 10px 13px 20px 0px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 10px 13px 20px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 10px 13px 20px 0px rgba(0, 0, 0, 0.71);
}

.input_date,
.input_tel,
.input_text {
  margin-left: 1.5%;
}
</style>
