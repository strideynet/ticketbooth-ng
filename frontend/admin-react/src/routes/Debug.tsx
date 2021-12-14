import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { AdminClient } from '../api/admin/v1/AdminServiceClientPb'
import { ServerInfoRequest, ServerInfoResponse } from '../api/admin/v1/admin_pb'
import { signIn, signOut, useUserContext } from '../services/firebase'

export default function Debug () {
  const user = useUserContext()

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

  const [token, setToken] = React.useState<string>()
  React.useEffect(() => {
    async function getToken (): Promise<void> {
      if (user === null) {
        return setToken('no user')
      }

      const tok = await user.getIdToken()
      setToken(tok)
    }
    getToken()
  }, [user])

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>Debug</Typography>
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240
            }}
          >
            <Typography variant="h6" color="primary" gutterBottom>
              Server Data
            </Typography>
            {
              serverData !== undefined
                ? (
                    <Typography variant="body1">
                      {JSON.stringify(serverData.toObject())}
                    </Typography>
                  )
                : 'Loading...'
            }
          </Paper>
        </Grid>
        <Grid item lg={6} zeroMinWidth>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography variant="h6" color="primary" gutterBottom>
              User Data
            </Typography>
            {
              user !== null
                ? (
                    <Typography variant="body1" sx={{ overflowWrap: 'break-word' }}>
                      <strong>Display Name: </strong>{user.displayName} <br/>
                      <strong>UID: </strong>{user.uid} <br/>
                      <strong>Token: </strong>{token}
                    </Typography>
                  )
                : 'Logged out...'
            }
            <Button onClick={signIn}>
              Sign In
            </Button>
            <Button onClick={signOut}>
              Sign Out
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
