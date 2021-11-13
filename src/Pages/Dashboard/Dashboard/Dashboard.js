import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Button from '@restart/ui/esm/Button';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import GiveReview from '../GiveReview/GiveReview';
import ManageOrders from '../ManageOrders/ManageOrders';
import Pay from '../Pay/Pay';
import AddToy from '../AddToy/AddToy';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ padding: "10px", fontFamily: "Roboto" }}>
                <Link style={{ textDecoration: 'None' }} to="/home"><Button
                    style={{
                        backgroundColor: "white",
                        border: "1px solid #1487D3",
                        padding: "5px",
                        color: "#1487D3",
                        borderRadius: "8px"
                    }}>Homepage</Button></Link>
            </Box>
            <Divider />
            <Divider />
            <Box sx={{ padding: "10px", fontFamily: "Roboto" }}>
                <Link style={{ textDecoration: 'None' }} to={`${url}`}><Button
                    style={{
                        backgroundColor: "white",
                        border: "1px solid #1487D3",
                        padding: "5px",
                        color: "#1487D3",
                        borderRadius: "8px"
                    }}>Orders</Button></Link>
            </Box>
            <Divider />
            <Divider />
            {!admin && <Box sx={{ padding: "10px", fontFamily: "Roboto" }}>
                <Link style={{ textDecoration: 'None' }} to={`${url}/giveReview`}><Button
                    style={{
                        backgroundColor: "white",
                        border: "1px solid #1487D3",
                        padding: "5px",
                        color: "#1487D3",
                        borderRadius: "8px"
                    }}>Give Review</Button></Link>
            </Box>}
            <Divider />
            <Divider />
            {!admin && <Box sx={{ padding: "10px", fontFamily: "Roboto" }}>
                <Link style={{ textDecoration: 'None' }} to={`${url}/pay`}><Button
                    style={{
                        backgroundColor: "white",
                        border: "1px solid #1487D3",
                        padding: "5px",
                        color: "#1487D3",
                        borderRadius: "8px"
                    }}>Payment</Button></Link>
            </Box>}
            <Divider />
            <Divider />
            {admin && <Box>
                <Box sx={{ padding: "10px", fontFamily: "Roboto" }}>
                    <Link style={{ textDecoration: 'None' }} to={`${url}/makeAdmin`}><Button
                        style={{
                            backgroundColor: "white",
                            border: "1px solid #1487D3",
                            padding: "5px",
                            color: "#1487D3",
                            borderRadius: "8px"
                        }}>Make Admin</Button></Link>
                </Box>
                <Divider />
                <Divider />
                <Box sx={{ padding: "10px", fontFamily: "Roboto" }}>
                    <Link style={{ textDecoration: 'None' }} to={`${url}/manageOrders`}><Button
                        style={{
                            backgroundColor: "white",
                            border: "1px solid #1487D3",
                            padding: "5px",
                            color: "#1487D3",
                            borderRadius: "8px"
                        }}>Manage Orders</Button></Link>
                </Box>
                <Divider />
                <Box sx={{ padding: "10px", fontFamily: "Roboto" }}>
                    <Link style={{ textDecoration: 'None' }} to={`${url}/addToy`}><Button
                        style={{
                            backgroundColor: "white",
                            border: "1px solid #1487D3",
                            padding: "5px",
                            color: "#1487D3",
                            borderRadius: "8px"
                        }}>Add Toy</Button></Link>
                </Box>
            </Box>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: 'rgb(91, 74, 102)' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ fontFamily: 'Roboto', mx: "auto", width: 200 }}>
                        Dashboard
                    </Typography>
                    <Typography>
                        <Nav.Link as={HashLink} style={{ color: 'white' }} to="#" onClick={logOut}>Logout</Nav.Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/giveReview`}>
                        <GiveReview />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addToy`}>
                        <AddToy />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
