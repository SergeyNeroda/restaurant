<template>
  <v-container>
        <span>
        <v-navigation-drawer app v-model="drawer" color="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                    <v-subheader>Гість</v-subheader>
                    <v-divider></v-divider>
                    <v-list-item v-for="(item,index) in items" :key="index" >
                        <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content >
                            {{item.title}}
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content >
                            Вхід
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content >
                            Реєстрація
                        </v-list-item-content>
                    </v-list-item>
              
            </v-list>
        </v-navigation-drawer> 
        <!--  -->
        <v-app-bar app color="brown darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title href="/" class="pa-2"> {{appTitle}} </v-toolbar-title>
            <v-btn href="#/" text class="hidden-sm-and-down">Меню</v-btn>
            <v-btn href="#/catalog" text class="hidden-sm-and-down">Каталог</v-btn>
            <v-btn href="#/blog" text class="hidden-sm-and-down">Блог</v-btn>
            <v-btn href="#/reservation" text class="hidden-sm-and-down">Резервація</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn text class="hidden-sm-and-down">Вхід</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down">Реєстрація</v-btn>
        </v-app-bar>
        </span>        
  </v-container> 
</template>

<script>
  export default {
    name: 'Navigation',

    data: () => ({
      appTitle: 'Restaurant',
      drawer: false,
      items: [
        {title: 'Меню', icon: "mdi-star"},
        {title: 'Каталог', icon: "mdi-history"},
        {title: 'Резервація', icon: "mdi-star"},
        {title: 'Блог', icon: "mdi-upload"}
        ]
    }),
  }
</script>
