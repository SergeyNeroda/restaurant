<template id="app-footer">
        <v-card >
            <v-footer app color="brown " absolute padless dark>
            <v-row justify="center" no-gutters>
                    <v-btn href="#/" text rounded class="my-2">Меню</v-btn>
                    <v-btn href="#/catalog" text rounded class="my-2">Каталог</v-btn>
                    <v-btn href="#/blog" text rounded class="my-2">Блог</v-btn>
                    <v-btn href="#/reservation" text rounded class="my-2">Резервація</v-btn>
                
                <v-col class="text-center brown lighten-2 py-4" color="" cols="12">
                    {{new Date().getFullYear()}} - Sergey Neroda
                </v-col>
            </v-row>
            </v-footer>
        </v-card>
</template>

<script>
export default {
    
}
</script>