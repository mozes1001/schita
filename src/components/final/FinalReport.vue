<template>
  <div id="page q-pa-md q-gutter-sm">
    <q-banner class="banner bg-primary text-white">
      <h4>דו"ח סיום</h4>
      <p>קבל עידכון "סופי" מכל השחיטה </p>
    </q-banner>


      <div class="q-pa-md">
        <q-table
          title="דוח סיום "
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="מספר" :props="props">
                {{ props.row.מספר }}
              </q-td>
              <q-td key="כשרות" :props="props">
                <q-badge color="green">
                  {{ props.row.כשרות }}
                </q-badge>
              </q-td>
              <q-td key="מיקום" :props="props">
                <q-badge color="purple">
                  {{ props.row.מיקום }}
                </q-badge>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
  </div>
</template>

<script>
const columns = [
  {
    name: 'מספר',
    required: true,
    label: 'מספר',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'כשרות', align: 'center', label: 'כשרות', field: 'כשרות', sortable: true },
  { name: 'מיקום', label: 'מיקום', field: 'מיקום', sortable: true },
]

const rows = [
  {
    'מספר': '01',
    'כשרות': "כשר",
    'מיקום': "סיים",
  },{
    'מספר': '02',
    'כשרות': "כשר",
    'מיקום': "סיים",
  },{
    'מספר': '03',
    'כשרות': "כשר",
    'מיקום': "סיים",
  },

]
export default {
  name: "Status",
  setup () {
    return {
      columns,
      rows
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
</style>
