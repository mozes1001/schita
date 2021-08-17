<template>
  <div id="page q-pa-md q-gutter-sm">
    <q-banner class="banner bg-primary text-white">
      <h4>דף הבית</h4>
      <p>בחר תפקידך והתחל בהצלחה</p>
    </q-banner>

    <section class="main row">
      <div class="q-gutter-y-md col-5" style="padding: 5px">
        <q-btn @click="goTo('/status')" class="btn glossy rounded-borders" label="רב" />
        <q-btn class="btn glossy rounded-borders" label="שוחט" @click="goTo('/start-process')"/>
        <q-btn class="btn glossy rounded-borders" label="בודק פנים" @click="goTo('/status-bodek-pnim')"/>
        <q-btn class="btn glossy rounded-borders" label="בודק חוץ" @click="goTo('/status-bodek-chutz')"/>
        <q-btn class="btn glossy rounded-borders" label="משגיח" @click="goTo('/start-process')"/>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
#page{
  direction: rtl;
  margin: 0;
  padding:20px;
  display: flex;
}
.banner , h4, p{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  direction: rtl;
  font-size: 2.5em;
  font-weight: bold;
  line-height: 0.55;
  padding: 15px;
  margin: 3px;
}
p {
  font-size: 1.5em;
  font-weight: bold;
}
.main {
  height: 50em;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 25%;
  margin-right: -20%;
  font-size: 16px;
}
button {
justify-content: center;
  width: 250px;
  height: 70px;
  background: #3f7ea4;
  color: antiquewhite;
  border-color:cornflowerblue;
  font-size: 2.5em;
  font-weight: bold;
}

</style>
