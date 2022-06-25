
import {User} from "react-feather";
import {Topbar, Sidebar, Footer} from '/components/dashboard/partials'

function DashboardLayout({children}) {
	return (
		<>
			<div className="dashboard">
				<Sidebar/>
				<Topbar/>
				<div className="dashboard-main">
					{children}
				</div>
				<Footer/>
			</div>
		</>
	)
}

export default DashboardLayout