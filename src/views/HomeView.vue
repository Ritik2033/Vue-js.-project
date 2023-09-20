<template>
  <div class="sidebar" id="sidebar" :class="['sidebar', { 'active': isSidebarOpen }]">
    <v-navigation-drawer app :clipped="$vuetify.breakpoint.mdAndUp" style="margin-top: 75px;">
      <!-- Sidebar content goes here -->
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="handleMenuItemClick(item)">{{ item.text }}</v-list-item-title>
          </v-list-item-content>

          <!-- Show the dashboard submenu items after the Dashboard menu item -->
          <v-list-item-group v-if="showDashboardSubmenu && item.text === 'Dashboard'">
            <v-list-item v-for="(subitem, subindex) in dashboardSubmenu" :key="'submenu-' + subindex" link>
              <v-list-item-content>
                <v-list-item-title @click="handleSubMenuItemClick(subitem)">{{ subitem.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>

          

            

          






        </v-list-item>
      </v-list>

      <div class="copyright" style="margin-top: 20%;">
					<p><strong>Mophy Payment Admin Dashboard</strong> © 2023 All Rights Reserved</p>
					<p>Made with <span class="heart"></span> by DexignZone</p>
				</div>
    </v-navigation-drawer>
  </div>
</template>



<script>
export default {
  name: 'Home',

  data() {
    return {
      menuItems: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard', submenu: true },
        { text: 'CMS', icon: 'mdi-cog', submenu: false },
        { text: 'Apps', icon: 'mdi-television', submenu: false },
        { text: 'Charts', icon: 'mdi-chart-line', submenu: false },
        { text: 'Bootstrap', icon: 'mdi-earth', submenu: false },
        { text: 'Plugins', icon: 'mdi-heart', submenu: false },
        { text: 'Widgets', icon: 'mdi-widgets', submenu: false },
        { text: 'Form', icon: 'mdi-form-select', submenu: false },
        { text: 'Table', icon: 'mdi-table-large', submenu: false },
        { text: 'Page', icon: 'mdi-file-document', submenu: false },
        { text: 'Logout', icon: 'mdi-logout', submenu: false },
        // Add more menu items as needed
      ],
      showDashboardSubmenu: false,
      dashboardSubmenu: [
        { text: 'Dashboard' },
        { text: 'My Wallet' },
        { text: 'Invoice' },
        { text: 'Card center' },
        { text: 'Transaction' },
        { text: 'Transaction Details' },
        // Add more submenu items as needed
      ],


    };
  },
  props: {
    isSidebarOpen: Boolean,
  },

  methods: {
    handleMenuItemClick(item) {

      if(item.text === "Logout"){
            this.$router.push('/'); 
            sessionStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
      if (item.submenu) {
        this.showDashboardSubmenu = true;
      } else {
        this.showDashboardSubmenu = false;
      }
    },

    handleSubMenuItemClick(subitem) {
      if (subitem.text === 'Dashboard' && this.$route.path !== '/dashboard') {
        this.$router.push('/dashboard');
      }

      if (subitem.text === 'My Wallet' && this.$route.path !== '/my_wallet') {
        this.$router.push('/my_wallet');
      }
      if (subitem.text === 'Invoice' && this.$route.path !== '/invoices_main') {
        this.$router.push('/invoices_main');
      }
      if (subitem.text === 'Card center' && this.$route.path !== '/transaction') {
        this.$router.push('/transaction');
      }

      if (subitem.text === 'Transaction' && this.$route.path !== '/web') {
        this.$router.push('/web');
      }

      if (subitem.text === 'Transaction Details' && this.$route.path !== '/transaction_details') {
        this.$router.push('/transaction_details');
      }

      this.showDashboardSubmenu = false;
    },
  },
};
</script>

<style scoped>
.sidebar {
  /* Your sidebar styles here */
}
.v-icon {
   /* margin-right: 15px;*/
}

.v-icon {
    color: #FFF; 
    background-color: #1EAAE7 !important;
    border-radius: 50%; 
    padding: 5px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.v-list-item {
 /* padding: 10px;*/
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
}

.v-list-item:hover {
 /* Change the background color when hovering */
  cursor: pointer; /* Change the cursor to a pointer on hover */
}


</style>
