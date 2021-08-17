<template>
  <div id="page q-pa-md q-gutter-sm">
    <q-banner class="banner bg-primary text-white">
      <h4>דף התחל לפני השחיטה</h4>
      <p>אנא הכנס הפרטים הבאים </p>
    </q-banner>

    <section>
        <div class="q-pa-md q-gutter-sm" >
          <q-select outlined v-model="model" :options="options" label="גֶזַע" />
          <q-input filled v-model="date" >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer" >
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
    </section>

    <section class="selectors main row q-pa-md" >
      <div class="q-gutter-y-md col">
        <q-input outlined rounded-borders placehoolder label="תג אוזן" />
        <q-input outlined rounded-borders label="מס' סידורי חדש" />

        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">מספר רץ חדש</div>
            <div class="text-subtitle2">קיבלתם מס' רץ ? התחל </div>
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn @click="goTo('/status-shochet')" class="bg-warning btn glossy rounded-borders"
                   label="התחל"
            />
          </q-card-actions>
        </q-card>


      </div>
    </section>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "StartProcess",
  setup () {
    return {
      model: ref(null),
      options: [
        'פרה', 'עגל', 'שור', 'כבש', 'עז'
      ],
      date: ref('2019-02-01    12:44'),
      text: ref('')
    }
  },
  methods: {
    goTo(path){
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
  justify-content: center;
  align-items: center;
}
.banner , h4, p{
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
.selectors {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
 min-width: fit-content;
padding-inline: 5vh;
  padding-bottom: 10px;
  margin-bottom: 50px;

}

</style>
