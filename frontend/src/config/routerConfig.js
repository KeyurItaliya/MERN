import React,{ lazy } from 'react';

////// protect routes
const CustomersApp = lazy(()=> import('../component/MainDesh'))
const ReportDashboardApp = lazy(()=> import('../component/Listitem'))
const TaskApp = lazy(()=> import('../component/Card'))
const NotificationApp = lazy(()=> import('../component/MainDesh'))
const MailApp = lazy(()=> import('../component/MainDesh'))
const ViewCampaign = lazy(()=> import('../component/MainDesh'))
const SettingApp = lazy(()=> import('../component/MainDesh'))
const ImportCustomerData = lazy(()=> import('../component/MainDesh'))

export const AuthRoutes = [
	{
		path:'/',
		component:CustomersApp
	},
	{
		path:'/dashboard',
		component:ReportDashboardApp
	},
	{
		path : '/tasks',
		exact : true,
		component : TaskApp
	},
	{
		path:'/notifications',
		component:NotificationApp
	},
	{
		path:'/mail',
		exact: true,
		component:MailApp
	},
	{
		path:'/mail/campaigns',
		component:ViewCampaign
	},
	{
		path:'/settings',
		exact:true,
		component:SettingApp
	},
	{
		path:'/notiphyimport',
		exact:true,
		component:ImportCustomerData
	},
	///// temp routes

	// {
	// 	path:'/pages/errors/error-404',
	// 	component:lazy(()=>import('component/MainDesh'))
	// },
	// {
	// 	path:undefined,
	// 	component: () => <Redirect to="/pages/errors/error-404" />
	// },
]