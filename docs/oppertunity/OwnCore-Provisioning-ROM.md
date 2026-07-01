# Project Overview

**Opportunity Name:** OwnCore Provisioning ROM  
**Client:** OwnCore (HPE Partner)  
**Date:** April 2026  
**Status:** Pre-Sales

This opportunity focuses on demonstrating wireless provisioning capabilities to OwnCore deployed CORE network across different Communication Service Providers (CSPs). The initiative involves positioning HPE Telco Solution Service Order Management (SOM) and Resource Order Management (ROM) for comprehensive service/resource order management and wireless service provisioning (prepaid and postpaid) for consumer, enterprise, and roaming scenarios.

---

## Client Context

**Client:** OwnCore  
**Deployment Model:** Multi-tenant infrastructure serving multiple clients with dedicated infrastructure stacks  
**Geographic Scope:** ASIA-PACIFIC region  
**Partner:** HPE (Hewlett Packard Enterprise)

OwnCore supports multiple clients with separate deployment stacks. The platform handles diverse subscriber bases across two primary deployment configurations:

- **Large Customer (Setup 1):**
  - Active subscribers with promotions/tariffs: 500,000
  - Total subscriber base: 4,000,000
  - Daily active subscribers generating traffic: 150,000

- **Secondary Customer (Setup 2):**
  - Active subscribers with promotions/tariffs: 100,000
  - Total subscriber base: 1,500,000
  - Daily active subscribers generating traffic: 50,000

---

## Business Goals

1. Position HPE Telco Solution for end-to-end service and resource order management
2. Enable wireless provisioning for prepaid and postpaid services across consumer, enterprise, and roaming segments
3. Implement comprehensive resource management covering reservation, assignment, allocation, and termination processes
4. Achieve API throughput of **50 transactions per second (TPS)** at peak load
5. Support subscriber lifecycle management including SIM/eSIM activation, plan changes, suspension, and termination

---

## Scope and Requirements

### Services Supported

**Service Orders:**
- SIM/eSIM activation
- Plan assignment
- Suspension and unsuspension
- Plan changes
- Termination

**Resource Orders:**
- HSS provisioning (ICCID, IMSI, MSISDN, profiles)
- OCS provisioning (balance and quota management)
- PCRF provisioning (policy rules)
- SMSC provisioning
- MNP provisioning
- DP+OTA provisioning
- Entitlement Server updates

### Use Cases

1. Prepaid and Postpaid for Consumer
2. Prepaid and Postpaid for Enterprise
3. Roaming (eSIM provisioning)

### Order Transactions

- Create
- Modify (Plan upgrade, Change MSISDN, Change IMSI)
- Suspend/Resume
- Terminate

### Performance Requirements

- API throughput: 50 TPS combined (service and resource order processing)
- Support for up to 5,000 orders per day
- Multi-environment support (Dev, SIT, UAT, Pre-prod, Production)

---

## Proposed Solution

### Products Positioned

- **Service Order Management (SOM)** with Inventory and TMF641 capability
- **Resource Order Management (ROM)** with Inventory and TMF652 capability

### Target Architecture

```
CRM (Client) → API Gateway → TMF641 GW / TMF652 GW
                    ↓
            [SOM | ROM | Catalog]
            
            [Adapters for Southbound Integration]
            
            [HSS | OCS | PCRF | SMSC | MNP | DP+OTA | Entitlement Server]
```

### Key Components

1. **API Gateway** - Centralized entry point for all service and resource orders
2. **SOM Module** - Service Order Management with TMF641 compliance
3. **ROM Module** - Resource Order Management with TMF652 compliance
4. **Adapters** - Southbound integration with network elements
5. **Security** - AD/LDAP integration
6. **Monitoring** - Real-time monitoring and web-based dashboards
7. **CRM Integration** - Client-facing order management interface

---

## Deliverables

### Work Packages

1. **Environment Setup**
   - 4 Non-Production Environments (Dev, SIT, UAT, Pre-prod)
   - Production Environment with High Availability (HA) and Geo-Redundancy

2. **Development**
   - Development of 5 Southbound adapters for integration
   - Modeling of 5 services and supported order transactions
   - Design documentation (Adapter, Service Model, Integration)

3. **Testing & Validation**
   - Testing support across all environments
   - System integration testing (SIT)
   - User acceptance testing (UAT)
   - Final user acceptance testing (FUAT)

4. **Operations**
   - Production Stability Support (1 month post-deployment)

---

## Timeline and Milestones

**Total Duration:** 24 weeks  
**Project Structure:** 6 major milestones

| Week | Phase | Milestone | Deliverable |
|------|-------|-----------|-------------|
| W1-W2 | Project Initialization | M1 | Kickoff meeting, Design, Hardware Readiness |
| W3-W8 | Design & Environment Setup | M2 | Design Completed and Accepted, Env Setup |
| W9-W15 | Adapter Development & Service Modeling | M3 | Development Completed, Setup Completed |
| W16-W18 | Testing | M4 | Testing Completed (SIT/UAT/FUAT) |
| W19-W22 | Production Preparation | M5 | Production Deployment Readiness |
| W23-W24 | Production Rollout | M6 | Production Deployment Complete |

---

## Risks and Assumptions

### Assumptions

1. **No Service Data Migrations** - Existing data will not be migrated
2. **Southbound Integrations** - Limited to 2 southbound integrations that support CLI and/or SNMP
3. **Resource Management Scope** - SIM and MSISDN only (no UICC or other resource types)
4. **Order Volume** - Up to 5,000 orders per day capacity
5. **Customer Adapters** - No custom customer adapter development required

### Exclusions

1. Service Data Migrations
2. Third-party adapter development beyond the 5 planned
3. Advanced resource types beyond SIM and MSISDN

---

## Open Questions

1. What are the specific requirements for HA and Geo-Redundancy in Production?
2. Which 5 Southbound systems will be targeted for adapter development?
3. What is the expected data retention and archival policy?
4. Are there specific compliance or regulatory requirements (e.g., data residency)?
5. What is the support model post-stability support period?
6. Will there be performance testing requirements beyond 50 TPS baseline?
7. What is the change management and rollback strategy for Production deployments?

---

## Next Steps

1. **Requirements Finalization** - Confirm detailed technical and functional requirements with OwnCore
2. **Architecture Review** - Present and validate target architecture with stakeholder team
3. **Resource Allocation** - Assign development, testing, and operations teams
4. **Environment Provisioning** - Begin infrastructure preparation for 4 non-prod and 1 prod environment
5. **Adapter Selection** - Identify and prioritize the 5 Southbound systems for adapter development
6. **Project Kickoff** - Conduct formal project initialization with timeline confirmation
7. **Design Phase Initiation** - Start detailed design for SOM, ROM, and adapter implementations
