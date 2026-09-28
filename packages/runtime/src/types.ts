export type StageStatus="pending"|"active"|"done"|"blocked";export type RunStatus="queued"|"running"|"waiting_approval"|"completed"|"failed"|"cancelled";
export type Permission="read_files"|"write_files"|"execute_commands"|"network"|"browser"|"git"|"github"|"database"|"email"|"deployment"|"secrets";
export interface ProjectState{id:string;name:string;stage:string;status:StageStatus;version:string;blockers:string[];updatedAt:string}
export interface AgentDefinition{id:string;name:string;purpose:string;version:string;tools:string[];permissions:Permission[];guardrails:string[]}
export interface ResearchRequest{product:string;destination:string;quantity?:number;unit?:string;countries?:string[];requirements?:string[]}
export interface SupplierCandidate{id:string;supplier:string;country:string;product:string;price?:number;currency?:string;moq?:number;evidenceUrls:string[];evidenceQuality:"unverified"|"partial"|"verified"}
export interface ResearchRun{id:string;status:RunStatus;request:ResearchRequest;candidates:SupplierCandidate[];startedAt:string;finishedAt?:string;error?:string}
export interface ModelGateway{generate(input:{system?:string;prompt:string;model?:string}):Promise<{text:string;model:string}>}
export interface ResearchTool{readonly name:string;search(input:{query:string;limit?:number}):Promise<Array<{title:string;url:string;snippet?:string}>>}
export interface ApprovalGate{request(input:{action:string;reason:string;risk:"low"|"medium"|"high"}):Promise<boolean>}
