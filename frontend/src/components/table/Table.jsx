import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

  /*
  {
                    'minerID': machine.minerID,
                    'brand': machine.brand,
                    'model': machine.model,
                    'monitoringTime': machine.monitoringTime,
                    'curStatus': machine.curStatus,
                    'curPower': machine.curPower,
                    'curHashRate': machine.curHashRate,
                    'curPowerRatio': machine.curPowerRatio,
                    'ratedPower': machine.ratedPower,
                    'ratedHashRate': machine.ratedHashRate,
                    'ratedPowerRatio': machine.ratedPowerRatio
  }
*/

const List = () => {
  const rows = [
    {
      minerID: 1143155,
      brand: "Bitmain",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      model: "S19 Pro",
      monitoringTime: "10-30-2022 20:00",
      amount: 1000,
      curHashRate: "250T/s",
      curStatus: "Online",
    },
    {
      minerID: 1143155,
      brand: "Bitmain",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      model: "S19 XP",
      monitoringTime: "10-30-2022 10:00",
      amount: 1000,
      curHashRate: "110T/s",
      curStatus: "Online",
    },
 
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Miner ID</TableCell>
            <TableCell className="tableCell">Brand</TableCell>
            <TableCell className="tableCell">Model</TableCell>
            <TableCell className="tableCell">Total</TableCell>
            <TableCell className="tableCell">Qualified</TableCell>
            <TableCell className="tableCell">Offline</TableCell>
            <TableCell className="tableCell">Abnormal</TableCell>
            <TableCell className="tableCell">Current Hashrate</TableCell>
            <TableCell className="tableCell">Last Monitoring Time</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.minerID}>
              <TableCell className="tableCell">{row.minerID}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.brand}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.model}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.amount-50}</TableCell>
              <TableCell className="tableCell">{row.amount-945}</TableCell>
              <TableCell className="tableCell">{row.amount-980}</TableCell>
              <TableCell className="tableCell">{row.curHashRate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.monitoringTime}`}>{row.monitoringTime}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
