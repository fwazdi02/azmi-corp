
// 1. Define route components.
// These can be imported from other files
import DashboardIndex from './components/dashboard/DashboardIndex.vue';
import UserIndex from './components/user/UserIndex.vue';
import UserCreate from './components/user/UserCreate.vue';
import UserEdit from './components/user/UserEdit.vue';
import MobilIndex from './components/mobil/MobilIndex.vue';
import MobilCreate from './components/mobil/MobilCreate.vue';
import MobilEdit from './components/mobil/MobilEdit.vue';
import SupplierIndex from './components/supplier/SupplierIndex.vue';
import SupplierCreate from './components/supplier/SupplierCreate.vue';
import SupplierEdit from './components/supplier/SupplierEdit.vue';
import DriverIndex from './components/driver/DriverIndex.vue';
import DriverCreate from './components/driver/DriverCreate.vue';
import DriverEdit from './components/driver/DriverEdit.vue';
import GudangIndex from './components/gudang/GudangIndex.vue';
import GudangCreate from './components/gudang/GudangCreate.vue';
import GudangEdit from './components/gudang/GudangEdit.vue';
import PelangganIndex from './components/pelanggan/PelangganIndex.vue';
import PelangganCreate from './components/pelanggan/PelangganCreate.vue';
import PelangganEdit from './components/pelanggan/PelangganEdit.vue';
import KasIndex from './components/kas/KasIndex.vue';
import KasCreate from './components/kas/KasCreate.vue';
import KasEdit from './components/kas/KasEdit.vue';
import AkunIndex from './components/akun/AkunIndex.vue';
import AkunCreate from './components/akun/AkunCreate.vue';
import AkunEdit from './components/akun/AkunEdit.vue';

import PosisiKasIndex from './components/transaksi-kas/PosisiKasIndex.vue';
import TransaksiKasIndex from './components/transaksi-kas/TransaksiKasIndex.vue';
import TransaksiKasCreate from './components/transaksi-kas/TransaksiKasCreate.vue';
import TransaksiKasEdit from './components/transaksi-kas/TransaksiKasEdit.vue';
import TransaksiKasMasukCreate from './components/transaksi-kas/TransaksiKasMasukCreate.vue';
import TransaksiKasKeluarCreate from './components/transaksi-kas/TransaksiKasKeluarCreate.vue';

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: DashboardIndex,name:'IndexDashboard' },
  { path: '/user', component: UserIndex,name: 'IndexUser' },
  { path: '/user/create', component: UserCreate,name: 'CreateUser' },
  { path: '/user/edit/:id', component: UserEdit,name: 'EditUser' },
  { path: '/mobil', component: MobilIndex,name: 'IndexMobil' },
  { path: '/mobil/create', component: MobilCreate,name: 'CreateMobil' },
  { path: '/mobil/edit/:id', component: MobilEdit,name: 'EditMobil' },
  { path: '/supplier', component:SupplierIndex,name: 'IndexSupplier' },
  { path: '/supplier/create', component:SupplierCreate,name: 'CreateSupplier' },
  { path: '/supplier/edit/:id', component:SupplierEdit,name: 'EditSupplier' },
  { path: '/driver', component:DriverIndex,name: 'IndexDriver' },
  { path: '/driver/create', component:DriverCreate,name: 'CreateDriver' },
  { path: '/driver/edit/:id', component:DriverEdit,name: 'EditDriver' },
  { path: '/gudang', component:GudangIndex,name: 'IndexGudang' },
  { path: '/gudang/create', component:GudangCreate,name: 'CreateGudang' },
  { path: '/gudang/edit/:id', component:GudangEdit,name: 'EditGudang' },
  { path: '/pelanggan', component:PelangganIndex,name: 'IndexPelanggan' },
  { path: '/pelanggan/create', component:PelangganCreate,name: 'CreatePelanggan' },
  { path: '/pelanggan/edit/:id', component:PelangganEdit,name: 'EditPelanggan' },
  { path: '/kas', component:KasIndex,name: 'IndexKas' },
  { path: '/kas/create', component:KasCreate,name: 'CreateKas' },
  { path: '/kas/edit/:id', component:KasEdit,name: 'EditKas' },
  { path: '/akun', component:AkunIndex,name: 'IndexAkun' },
  { path: '/akun/create', component:AkunCreate,name: 'CreateAkun' },
  { path: '/akun/edit/:id', component:AkunEdit,name: 'EditAkun' },
  { path: '/posisi-kas', component:PosisiKasIndex,name: 'IndexPosisiKas' },
  { path: '/transaksi-kas', component:TransaksiKasIndex,name: 'IndexTransaksiKas' },
  { path: '/transaksi-kas/create', component:TransaksiKasCreate,name: 'CreateTransaksiKas' },
  { path: '/transaksi-kas/edit/:id', component:TransaksiKasEdit,name: 'EditTransaksiKas' },
  { path: '/transaksi-kas/create/kas-masuk', component:TransaksiKasMasukCreate,name: 'CreateTransaksiKasMasuk' },
  { path: '/transaksi-kas/create/kas-keluar', component:TransaksiKasKeluarCreate,name: 'CreateTransaksiKasKeluar' },
]

export default routes;