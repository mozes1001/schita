<template>
  <div id="page q-pa-md q-gutter-sm">
    <q-banner class="banner bg-primary text-white">
      <h4>בודק פנים</h4>
      <p>מה הרגשתם ? </p>
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

        <q-card class="card-id item">
          <q-card-section>
            {{ breed }}
          </q-card-section>
        </q-card>
      </div>
    </section>

    <section class="img">
          <div class="container lung-img">
            <q-card class="card-lung-first item">
              <q-card-section>
                {{ lung }}
              </q-card-section>
            </q-card>
          </div>
        </section>
    <section class="img-control container-btn">
      <q-btn class="item-btn push" label="דבוק"/>
      <q-btn class="item-btn push" label="בועה"/>
      <q-btn class="item-btn push" label="ניתק"/>
      <q-btn class="item-btn push" label="צמקה"/>
      <q-btn class="item-btn push" label="רירים"/>
      <q-btn class="item-btn push" label="גב"/>
      <q-btn class="item-btn push" label="שןנות"/>
      <q-btn class="item-btn push" label="צייר"/>
      <q-btn class="item-btn push" label="מחק"/>

    </section>
    <div class="container-btn">
      <q-btn class="item-btn bg-lime-10 push" label="חלק"/>
      <q-btn class="item-btn bg-positive push" label="כשר"/>
      <q-btn class="item-btn bg-negative push" label="טרף"/>
      <q-btn class="item-btn bg-warning push" label="שאל הרב"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "BodekPnim"
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
  margin: 0;
}

p {
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.25;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.item {
  flex-grow: 1;
  height: 100px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 8px;
}

.item + .item {
  margin-left: 3%;
}
.card-breed {
  height: 75px;
  width: 100%;
  margin-left: 30px;
  margin-top: 75px;
  border-radius: 8px;
}

.card-date {
  height: 75px;
  width: 100%;
  margin-left: 30px;
  margin-top: 75px;
  border-radius: 8px;
}

.card-id {
  height: 75px;
  width: 100%;
  margin-left: 30px;
  margin-top: 75px;
  border-radius: 8px;
}

.lung-img {
  display: flex;
  justify-content: center;
  align-items: center;
width: 100%;
  height: 250px;
}
.card-lung-first{
position: absolute;
  top:50%;
  left: 45%;
  transform: translate(-49% , 35%);
  width: 90%;
  height: fit-content;
  border-radius: 8px;
}
.container-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item-btn {
  width: 32%;
  padding-bottom: 5%; /* 32:18, i.e. 16:9 */
  margin-bottom: 2%; /* (100-32*3)/2 */
  margin-right: -1px;
  margin-left: 3px;
  padding-right: 2px;
  padding-left: 2px;
  border-radius: 8px;
  font-size: 1.50em;
  color: antiquewhite;
  background: #1a237e;
}


</style>
