<template>
  <div id="page q-pa-md q-gutter-sm">
    <q-banner class="banner bg-primary text-white">
      <h4>שוחט</h4>
      <p>איך היה השחיטה ?</p>
    </q-banner>

    <section class="header">
      <div class="container">
        <q-card class="card-breed item">
          <q-card-section>
            {{ breed }}
          </q-card-section>
        </q-card>

        <q-card class="card-date item">
          <q-card-section>
            {{ date }}
          </q-card-section>
        </q-card>
      </div>
    </section>

    <section class="row q-col-gutter-xl-x-xl body">
      <div class="col-4">
        <q-card class="card-id">
          <q-card-section>
            {{ breed }}
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section class="">
      <div class="container">
        <q-btn class="item bg-positive
                btn glossy rounded-borders
                text-weight-bold
                text-white"
               style="font-size: x-large"
               label="כשר"
        />
        <q-btn class="item bg-negative
        btn glossy rounded-borders
                text-weight-bold
                text-white"
               style="font-size: x-large"
               label="טרף"
        />
        <q-btn class="item bg-warning btn glossy rounded-borders
                text-weight-bold
                text-white"
               style="font-size: x-large"
               label="שאל הרב"
        />
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "SchitaStatus",
  setup() {
    return {
      breed: '',
      date: '',
    }
  }
}
</script>

<style scoped>
#page {
  direction: rtl;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner, h4, p {
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  direction: rtl;
  font-size: 2.5em;
  font-weight: bolder;
  line-height: 1.25;
  padding: 10px;
  margin: 0px;
}

p {
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.25;
}

.container {
  display: flex;
}

.item {
  flex-grow: 1;
  height: 100px;
  margin-left: 30px;
  margin-right: 30px;
}

.item + .item {
  margin-left: 5%;
}
.card-breed {
  height: 50px;
  width: 100%;
  margin-left: 30px;
  margin-top: 75px;
}

.card-date {
  width: 100%;
  height: 50px;
  margin-right: 30px;
  margin-top: 75px;
}

.body {
  display: flex;
  justify-content: center;
  padding: 10px 15px;
}

.card-id {
  width: 100%;
  height: 120px;
  margin-top: 75px;
  margin-bottom: 30px;
}
</style>
