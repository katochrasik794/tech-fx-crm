import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from './context/SidebarContext'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/user/Dashboard/Dashboard'
import Regulations from './pages/user/Regulations/Regulations'
import Deposit from './pages/user/MyFund/Deposit'
import Withdrawal from './pages/user/MyFund/Withdrawal'
import IBDashboard from './pages/user/IBProgramme/IBDashboard'
import MyClients from './pages/user/IBProgramme/MyClients'
import IBTreeChart from './pages/user/IBProgramme/IBTreeChart'
import MyCommission from './pages/user/IBProgramme/MyCommission'
import IBWithdraw from './pages/user/IBProgramme/IBWithdraw'
import TeamDepositReport from './pages/user/IBProgramme/TeamDepositReport'
import TeamWithdrawReport from './pages/user/IBProgramme/TeamWithdrawReport'
import Copier from './pages/user/Copier/Copier'
import UserDepositReport from './pages/user/MyData/DepositReport'
import UserWithdrawReport from './pages/user/MyData/WithdrawReport'
import InternalTransfers from './pages/user/MyData/InternalTransfers'
import DealReport from './pages/user/MyData/DealReport'
import SummaryReport from './pages/user/MyData/SummaryReport'
import TradeAndWin from './pages/user/TradeAndWin/TradeAndWin'
import MyWallet from './pages/user/MyWallet/MyWallet'
import News from './pages/user/News/News'
import Support from './pages/user/Support/Support'
import AdminDashboard from './pages/admin/Dashboard/Dashboard'
import Users from './pages/admin/Users/Users'
import Deposits from './pages/admin/Deposits/Deposits'
import Withdrawals from './pages/admin/Withdrawals/Withdrawals'
import Accounts from './pages/admin/Accounts/Accounts'
import Settings from './pages/admin/Settings/Settings'
import AddUser from './pages/admin/UserManagement/AddUser'
import UserList from './pages/admin/UserManagement/UserList'
import EditUser from './pages/admin/UserManagement/EditUser'
import UserDetails from './pages/admin/UserManagement/UserDetails'
import ChangeUserSettings from './pages/admin/UserManagement/ChangeUserSettings'
import CreateMT5Account from './pages/admin/UserManagement/CreateMT5Account'
import MT5UserList from './pages/admin/UserManagement/MT5UserList'
import FollowUpList from './pages/admin/UserManagement/FollowUpList'
import PendingDocumentsList from './pages/admin/UserManagement/PendingDocumentsList'
import ApprovedDocumentsList from './pages/admin/UserManagement/ApprovedDocumentsList'
import UploadUserDocuments from './pages/admin/UserManagement/UploadUserDocuments'
import AddBankDetails from './pages/admin/UserManagement/AddBankDetails'
import BankDetailsList from './pages/admin/UserManagement/BankDetailsList'
import UserPasswordList from './pages/admin/UserManagement/UserPasswordList'
import ChangeUserPassword from './pages/admin/UserManagement/ChangeUserPassword'
import AddExistingClient from './pages/admin/UserManagement/AddExistingClient'
import ChangeMT5Password from './pages/admin/UserManagement/ChangeMT5Password'
import UpdateMT5Leverage from './pages/admin/UserManagement/UpdateMT5Leverage'
import ResendVerificationMail from './pages/admin/UserManagement/ResendVerificationMail'
import ResendMT5DataMail from './pages/admin/UserManagement/ResendMT5DataMail'
import UserDocumentsDetails from './pages/admin/UserManagement/UserDocumentsDetails'
import GiveBonus from './pages/admin/Bonus/GiveBonus'
import RemoveBonus from './pages/admin/Bonus/RemoveBonus'
import BonusList from './pages/admin/Bonus/BonusList'
import IBUsers from './pages/admin/IBManagement/IBUsers'
import IBRequests from './pages/admin/IBManagement/IBRequests'
import IBPlan from './pages/admin/IBManagement/IBPlan'
import CommissionGroup from './pages/admin/IBManagement/CommissionGroup'
import SetIBCommission from './pages/admin/IBManagement/SetIBCommission'
import MoveClientToIB from './pages/admin/IBManagement/MoveClientToIB'
import AddGroup from './pages/admin/GroupManagement/AddGroup'
import GroupList from './pages/admin/GroupManagement/GroupList'
import UpdateMT5Group from './pages/admin/GroupManagement/UpdateMT5Group'
import ClientDeposit from './pages/admin/Transaction/ClientDeposit'
import ClientWithdraw from './pages/admin/Transaction/ClientWithdraw'
import WalletDeposit from './pages/admin/Transaction/WalletDeposit'
import WalletWithdraw from './pages/admin/Transaction/WalletWithdraw'
import IBWithdrawTrans from './pages/admin/Transaction/IBWithdraw'
import InternalTransfer from './pages/admin/Transaction/InternalTransfer'
import PendingDeposit from './pages/admin/Transaction/PendingDeposit'
import PendingWithdraw from './pages/admin/Transaction/PendingWithdraw'
import PendingIBWithdraw from './pages/admin/Transaction/PendingIBWithdraw'
import AddMarketing from './pages/admin/Marketing/AddMarketing'
import MarketingList from './pages/admin/Marketing/MarketingList'
import IncentiveReport from './pages/admin/Marketing/IncentiveReport'
import MarketingWithdrawReport from './pages/admin/Marketing/MarketingWithdrawReport'
import BulkLeadUpload from './pages/admin/Marketing/BulkLeadUpload'
import LeadList from './pages/admin/Marketing/LeadList'
import InvestorPAMMRequest from './pages/admin/PAMM/InvestorPAMMRequest'
import MoneyManagerPAMMRequest from './pages/admin/PAMM/MoneyManagerPAMMRequest'
import SlaveCopierRequest from './pages/admin/PAMM/SlaveCopierRequest'
import MasterCopierRequest from './pages/admin/PAMM/MasterCopierRequest'
import SendEmail from './pages/admin/SendEmail'
import NewsList from './pages/admin/News/NewsList'
import UnreadNotification from './pages/admin/Notification/UnreadNotification'
import ReadNotification from './pages/admin/Notification/ReadNotification'
import RewardsCategoryList from './pages/admin/Rewards/RewardsCategoryList'
import AddRewardCategory from './pages/admin/Rewards/AddRewardCategory'
import RewardsList from './pages/admin/Rewards/RewardsList'
import AddReward from './pages/admin/Rewards/AddReward'
import RewardWithdrawList from './pages/admin/Rewards/RewardWithdrawList'
import IBCommissionReport from './pages/admin/Reports/IBCommissionReport'
import RewardHistoryReport from './pages/admin/Reports/RewardHistoryReport'
import DepositReport from './pages/admin/Reports/DepositReport'
import WithdrawReport from './pages/admin/Reports/WithdrawReport'
import IBWithdrawReport from './pages/admin/Reports/IBWithdrawReport'
import InternalTransferReport from './pages/admin/Reports/InternalTransferReport'
import WalletHistoryReport from './pages/admin/Reports/WalletHistoryReport'
import PositionReport from './pages/admin/Reports/PositionReport'
import HistoryReport from './pages/admin/Reports/HistoryReport'
import LoginActivity from './pages/admin/Reports/LoginActivity'
import LotReport from './pages/admin/Reports/LotReport'
import ProfitRiskReport from './pages/admin/Reports/ProfitRiskReport'
import ScalpingTrade from './pages/admin/Reports/ScalpingTrade'
import ScalpingReport from './pages/admin/Reports/ScalpingReport'
import TicketsList from './pages/admin/Tickets/TicketsList'
import DepositBankDetails from './pages/admin/Settings/DepositBankDetails'
import PromotionList from './pages/admin/Settings/PromotionList'
import PSPSetting from './pages/admin/Settings/PSPSetting'
import DefaultSetting from './pages/admin/Settings/DefaultSetting'
import IBRequestTerms from './pages/admin/Settings/IBRequestTerms'
import CreateSubadmin from './pages/admin/Subadmin/CreateSubadmin'
import SubadminList from './pages/admin/Subadmin/SubadminList'

function App() {
  return (
    <SidebarProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/myfund/deposit" element={<Deposit />} />
        <Route path="/myfund/withdrawal" element={<Withdrawal />} />
        <Route path="/ib/dashboard" element={<IBDashboard />} />
        <Route path="/ib/clients" element={<MyClients />} />
        <Route path="/ib/tree" element={<IBTreeChart />} />
        <Route path="/ib/commission" element={<MyCommission />} />
        <Route path="/ib/withdraw" element={<IBWithdraw />} />
        <Route path="/ib/team-deposit" element={<TeamDepositReport />} />
        <Route path="/ib/team-withdraw" element={<TeamWithdrawReport />} />
        <Route path="/copier" element={<Copier />} />
        <Route path="/mydata/deposit-report" element={<UserDepositReport />} />
        <Route path="/mydata/withdraw-report" element={<UserWithdrawReport />} />
        <Route path="/mydata/internal-transfers" element={<InternalTransfers />} />
        <Route path="/mydata/deal-report" element={<DealReport />} />
        <Route path="/mydata/summary-report" element={<SummaryReport />} />
        <Route path="/trade-and-win" element={<TradeAndWin />} />
        <Route path="/wallet" element={<MyWallet />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/deposits" element={<Deposits />} />
        <Route path="/admin/withdrawals" element={<Withdrawals />} />
        <Route path="/admin/accounts" element={<Accounts />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/user/add" element={<AddUser />} />
        <Route path="/admin/user/list" element={<UserList />} />
        <Route path="/admin/user/edit" element={<EditUser />} />
        <Route path="/admin/user/details" element={<UserDetails />} />
        <Route path="/admin/user/settings" element={<ChangeUserSettings />} />
        <Route path="/admin/user/create-mt5" element={<CreateMT5Account />} />
        <Route path="/admin/user/mt5-list" element={<MT5UserList />} />
        <Route path="/admin/user/followup" element={<FollowUpList />} />
        <Route path="/admin/user/pending-docs" element={<PendingDocumentsList />} />
        <Route path="/admin/user/approved-docs" element={<ApprovedDocumentsList />} />
        <Route path="/admin/user/upload-docs" element={<UploadUserDocuments />} />
        <Route path="/admin/user/add-bank" element={<AddBankDetails />} />
        <Route path="/admin/user/bank-list" element={<BankDetailsList />} />
        <Route path="/admin/user/password-list" element={<UserPasswordList />} />
        <Route path="/admin/user/change-password" element={<ChangeUserPassword />} />
        <Route path="/admin/user/add-existing" element={<AddExistingClient />} />
        <Route path="/admin/user/change-mt5-password" element={<ChangeMT5Password />} />
        <Route path="/admin/user/update-leverage" element={<UpdateMT5Leverage />} />
        <Route path="/admin/user/resend-verification" element={<ResendVerificationMail />} />
        <Route path="/admin/user/resend-mt5-data" element={<ResendMT5DataMail />} />
        <Route path="/admin/user/documents-details" element={<UserDocumentsDetails />} />
        <Route path="/admin/bonus/give" element={<GiveBonus />} />
        <Route path="/admin/bonus/remove" element={<RemoveBonus />} />
        <Route path="/admin/bonus/list" element={<BonusList />} />
        <Route path="/admin/group/add" element={<AddGroup />} />
        <Route path="/admin/group/list" element={<GroupList />} />
        <Route path="/admin/group/update-mt5" element={<UpdateMT5Group />} />
        <Route path="/admin/ib/users" element={<IBUsers />} />
        <Route path="/admin/ib/requests" element={<IBRequests />} />
        <Route path="/admin/ib/plan" element={<IBPlan />} />
        <Route path="/admin/ib/commission-group" element={<CommissionGroup />} />
        <Route path="/admin/ib/commission" element={<SetIBCommission />} />
        <Route path="/admin/ib/set-commission" element={<SetIBCommission />} />
        <Route path="/admin/ib/move-client" element={<MoveClientToIB />} />
        <Route path="/admin/transaction/client-deposit" element={<ClientDeposit />} />
        <Route path="/admin/transaction/client-withdraw" element={<ClientWithdraw />} />
        <Route path="/admin/transaction/wallet-deposit" element={<WalletDeposit />} />
        <Route path="/admin/transaction/wallet-withdraw" element={<WalletWithdraw />} />
        <Route path="/admin/transaction/ib-withdraw" element={<IBWithdrawTrans />} />
        <Route path="/admin/transaction/internal-transfer" element={<InternalTransfer />} />
        <Route path="/admin/transaction/pending-deposit" element={<PendingDeposit />} />
        <Route path="/admin/transaction/pending-withdraw" element={<PendingWithdraw />} />
        <Route path="/admin/transaction/pending-ib-withdraw" element={<PendingIBWithdraw />} />
        <Route path="/admin/marketing/add" element={<AddMarketing />} />
        <Route path="/admin/marketing/list" element={<MarketingList />} />
        <Route path="/admin/marketing/incentive-report" element={<IncentiveReport />} />
        <Route path="/admin/marketing/withdraw-report" element={<MarketingWithdrawReport />} />
        <Route path="/admin/marketing/bulk-lead-upload" element={<BulkLeadUpload />} />
        <Route path="/admin/marketing/bulk-lead" element={<BulkLeadUpload />} />
        <Route path="/admin/marketing/lead-list" element={<LeadList />} />
        <Route path="/admin/pamm/investor-requests" element={<InvestorPAMMRequest />} />
        <Route path="/admin/pamm/money-manager-requests" element={<MoneyManagerPAMMRequest />} />
        <Route path="/admin/pamm/mm-requests" element={<MoneyManagerPAMMRequest />} />
        <Route path="/admin/pamm/slave-copier-requests" element={<SlaveCopierRequest />} />
        <Route path="/admin/pamm/slave-copier" element={<SlaveCopierRequest />} />
        <Route path="/admin/pamm/master-copier" element={<MasterCopierRequest />} />
        <Route path="/admin/send-email" element={<SendEmail />} />
        <Route path="/admin/news" element={<NewsList />} />
        <Route path="/admin/notification/unread" element={<UnreadNotification />} />
        <Route path="/admin/notification/read" element={<ReadNotification />} />
        <Route path="/admin/rewards/category-list" element={<RewardsCategoryList />} />
        <Route path="/admin/rewards/add-category" element={<AddRewardCategory />} />
        <Route path="/admin/rewards/list" element={<RewardsList />} />
        <Route path="/admin/rewards/add" element={<AddReward />} />
        <Route path="/admin/rewards/withdraw-list" element={<RewardWithdrawList />} />
        <Route path="/admin/reports/ib-commission" element={<IBCommissionReport />} />
        <Route path="/admin/reports/reward-history" element={<RewardHistoryReport />} />
        <Route path="/admin/reports/deposit" element={<DepositReport />} />
        <Route path="/admin/reports/withdraw" element={<WithdrawReport />} />
        <Route path="/admin/reports/ib-withdraw" element={<IBWithdrawReport />} />
        <Route path="/admin/reports/internal-transfer" element={<InternalTransferReport />} />
        <Route path="/admin/reports/wallet-history" element={<WalletHistoryReport />} />
        <Route path="/admin/reports/position" element={<PositionReport />} />
        <Route path="/admin/reports/history" element={<HistoryReport />} />
        <Route path="/admin/reports/login-activity" element={<LoginActivity />} />
        <Route path="/admin/reports/lot" element={<LotReport />} />
        <Route path="/admin/reports/profit-risk" element={<ProfitRiskReport />} />
        <Route path="/admin/risk/profit-risk" element={<ProfitRiskReport />} />
        <Route path="/admin/risk/scalping-trade" element={<ScalpingTrade />} />
        <Route path="/admin/risk/scalping-report" element={<ScalpingReport />} />
        <Route path="/admin/tickets" element={<TicketsList />} />
        <Route path="/admin/settings/deposit-bank-details" element={<DepositBankDetails />} />
        <Route path="/admin/settings/deposit-bank" element={<DepositBankDetails />} />
        <Route path="/admin/settings/promotion-list" element={<PromotionList />} />
        <Route path="/admin/settings/promotion" element={<PromotionList />} />
        <Route path="/admin/settings/psp-setting" element={<PSPSetting />} />
        <Route path="/admin/settings/psp" element={<PSPSetting />} />
        <Route path="/admin/settings/default-setting" element={<DefaultSetting />} />
        <Route path="/admin/settings/default" element={<DefaultSetting />} />
        <Route path="/admin/settings/ib-request-terms" element={<IBRequestTerms />} />
        <Route path="/admin/settings/ib-terms" element={<IBRequestTerms />} />
        <Route path="/admin/subadmin/create" element={<CreateSubadmin />} />
        <Route path="/admin/subadmin/list" element={<SubadminList />} />
      </Routes>
    </BrowserRouter>
    </SidebarProvider>
  )
}

export default App
