import './styles.scss'

import React from 'react'
import { useValues } from 'kea'
import { Col, Row } from 'antd'

import explorerLogic from 'scenes/explorer/logic'
import connectionLogic from '../connection/logic'
import BreadCrumbs from './breadcrumbs'
import Views from './views'
import Tutorial from './tutorial'
import ModelMap from './model-map'

export default function Dashboard () {
  const { selectedModel } = useValues(explorerLogic)
  const { selectedConnection, selectedSubset } = useValues(connectionLogic)

  const showViews = selectedConnection && selectedSubset && !selectedModel

  return (
    <div className='explorer-dashboard'>
      <BreadCrumbs />

      {showViews ? (
        <Row gutter={30}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Views />
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <ModelMap />
          </Col>
        </Row>
      ) : null}

      <Row gutter={30}>
        <Col span={24}>
          <Tutorial />
        </Col>
      </Row>
    </div>
  )
}