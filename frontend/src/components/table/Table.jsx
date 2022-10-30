import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      minerID: 1143155,
      brand: "Bitmain",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      model: "S19 Pro",
      monitoringTime: "1 March",
      amount: 785,
      curHashRate: "250T/s",
      curStatus: "Online",
    },
    {
      minerID: 1143155,
      brand: "Bitmain",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      model: "S19 XP",
      monitoringTime: "1 March",
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
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.curHashRate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.curStatus}`}>{row.curStatus}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
