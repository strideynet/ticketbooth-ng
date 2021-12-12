import * as React from 'react'
import { ServerInfoRequest, ServerInfoResponse } from '../api/admin/v1/admin_pb'
import { AdminClient } from '../api/admin/v1/AdminServiceClientPb'
import { Box, Paper, Typography } from '@mui/material'

export default function About () {
  const [serverData, setServerData] = React.useState<ServerInfoResponse>()

  React.useEffect(() => {
    async function fetchData (): Promise<void> {
      const ac = new AdminClient('http://localhost:8090', null, null)
      const req = new ServerInfoRequest()
      const res = await ac.serverInfo(req, null)
      setServerData(res)
    }

    fetchData()
  }, [])

  return (
      <Box sx={{ my: 4 }}>
        <Paper>
        <Typography variant="h3" component="h1">
            About
        </Typography>
        <Typography variant="body1">
        {serverData !== undefined ? JSON.stringify(serverData.toObject()) : 'loading'}
        </Typography>
        </Paper>
    </Box>
  )
}
