import './app-info.css'

const AppInfo = ({employees, increased}) => {
  return (
    <div className="app-info">
      <h1>Accounting for company employees</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>Award will receive: {increased}</h2>
    </div>
  )
}

export default AppInfo