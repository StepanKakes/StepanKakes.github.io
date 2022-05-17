new Vue({
    el: '#app',
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    mounted () {
      axios
        .get('https://ergast.com/api/f1/current/driverStandings.json')
        .then(response => {
          this.info = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  })