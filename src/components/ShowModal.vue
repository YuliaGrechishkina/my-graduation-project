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
                      <div
                        class="selectric-wrapper selectric-selectric selectric-selectric_pdp selectric-iconed selectric-iconed_service"
                      >
                        <div class="selectric-hide-select">
                          <select
                            name="service"
                            class="selectric selectric_pdp iconed iconed_service"
                            tabindex="-1"
                          >
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
                                          
                      </div>

  <div class="inputWrap__input">
    <i class="fas fa-comments"></i>
                       <input
                          class="selectric-input"
                          tabindex="0"
                          placeholder="Введіть послугу"
                        />
  </div>
            </form>
          </div>
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <div class="form__submit">
            <input
              type="submit"
              class="btn-green"
              value="записатися"
            />
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
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
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
  width: 30%;
  height: 45%;
}

.modal__content {
  height: 100%;
}
.modal-header{
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
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
  height: 55%;
}

.btn-close {
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
  position: absolute;
  top: -10%;
  right: 0;
  font-size: 25px;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
  font-size: 20px;
  text-transform: uppercase;
  padding: 3%;
 
}

.modal-header h1 {
  width: 70%;
}

.btn-close:hover {
  color: #ffffff;
  background-color: #4aae9b;
}

.btn-green:hover {
  background-color: #2b6b60;
transform:  scale(1.3);

}

.form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-left: 10%;
}

.fas {
  font-size: 25px;
  color: #29645a;
  margin-right: 10%;
}

.inputWrap__input {
  height: 20%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
  width: 100%;
  justify-content: start;
  align-items: center;
}

.iconed_service {
margin-right: 5%;
}

input{
  height: 100%;
}
</style>
