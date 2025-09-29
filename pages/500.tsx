import Typography from '@mui/material/Typography';

export default function Custom500() {
    return (
        <>
            <Typography variant='h1' sx={{m:3}}>Sorry, a server-side error occured</Typography>
            <Typography variant='h3' sx={{m:3}}>Error 500</Typography>
        </>
    )
}