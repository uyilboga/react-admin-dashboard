import Link from "next/link";
import {Button} from "react-bootstrap";

function Sidebar() {
	return (
		<div className="dashboard-sidebar">
			<div className="sidebar-logo">
				<Link href={'/dashboard'}>
					<a>
						Admin Dashboard
					</a>
				</Link>
			</div>
			<div className="sidebar-menu">
				<ul>
					<li>
						<Link href={'/dashboard'}>
							<a>Dashboard</a>
						</Link>
					</li>
					<li>
						<Link href={'/dashboard'}>
							<a>Services</a>
						</Link>
					</li>
					<li>
						<Link href={'/dashboard'}>
							<a>Users</a>
						</Link>
					</li>

					<li>
						<Link href={'/dashboard'}>
							<a>Settings</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="sidebar-footer">
				<Button variant="primary" href={'/'}>Need Help?</Button>
			</div>
		</div>
	)
}

export default Sidebar