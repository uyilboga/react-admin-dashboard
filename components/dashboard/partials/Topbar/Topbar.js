import {Form, FormGroup, FormControl} from 'react-bootstrap'
import {Search, Bell, Settings, Sun, Moon} from "react-feather";
import {useState} from "react";

function Topbar() {

	const [darkMode, setDarkMode] = useState(false);

	const searchSubmit = () => {

	}

	return (
		<>
			<div className="topbar">
				<div className="topbar-wrapper">
					<div className="search">
						<form onSubmit={() => searchSubmit}>
							<div className="form-item">
								<FormControl className="Control" placeholder="Search Something..."/>
								<span className="icon">
									<Search size={21}/>
								</span>
							</div>
						</form>
					</div>
					<div className="topbar-right">
						<div className="topbar-options">
							<ul>
								<li><a href="#" className="notifications"><Bell size={21}/></a></li>
								<li><a href="#" className="settings"><Settings size={21}/></a></li>
								<li><a href="#" className="darkmode">{ darkMode ? <Sun size={21}/> : <Moon size={21}/> }</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Topbar