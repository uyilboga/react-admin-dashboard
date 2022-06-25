import Link from "next/link";

function Sidebar() {
	return (
		<div className="dashboard-sidebar">
			<div className="sidebar-log">
				<Link href={'/dashboard'}>
					<a>
						Admin Dashboard
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Sidebar