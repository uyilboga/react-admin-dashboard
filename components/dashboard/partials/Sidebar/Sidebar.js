import Link from "next/link";
import {Button} from "react-bootstrap";
import {User, Home, Grid, Settings} from "react-feather";

function Sidebar() {
	return (
		<div className="dashboard-sidebar">
			<div className="sidebar-logo">
				<Link href={'/dashboard'}>
					<a>
						<img src={'/main/logo.svg'} alt=""/>
					</a>
				</Link>
			</div>
			<div className="sidebar-menu">
				<ul>
					<li><span className="menu-title">DASHBOARD</span></li>
					<li>
						<Link href={'/dashboard'}>
							<a className="active"><span className="icon"><Home size={18}/></span> Dashboard</a>
						</Link>
					</li>
					<li><span className="menu-title">TRANSACTİONS</span></li>
					<li>
						<Link href={'/dashboard'}>
							<a><span className="icon"><Grid size={18}/></span> Services</a>
						</Link>
					</li>
					<li><span className="menu-title">USER MANAGEMENT</span></li>
					<li>
						<Link href={'/dashboard'}>
							<a><span className="icon"><User size={18}/></span> Users</a>
						</Link>
					</li>

					<li>
						<Link href={'/dashboard'}>
							<a><span className="icon"><Settings size={18}/></span> Settings</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="sidebar-footer">
				<Button variant="secondary" href={'/'}>Need Help?</Button>
			</div>
		</div>
	)
}

export default Sidebar