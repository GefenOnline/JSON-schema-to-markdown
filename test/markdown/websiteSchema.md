The schema defines the following properties:
- `_id` (string, required)
- `is_deleted` (boolean)
- `createdAt` (, required)
- `createdBy` (string,null, required)
- `updatedAt`
- `updatedBy` (string,null)
- `website_id` (string,null)
- `createdFrom` (string,null)
- `address` (string, required)
- `title` (string,null)
- `tags` (array)
The object is an array with all elements of the type `string,null`.
- `keywordIds` (array)
The object is an array with all elements of the type `string,null`.
- `settings` (object)
  - `isHidden` (boolean)
  - `permittedRoles` (array,null)
  - `permittedSectors` (array)
The object is an array with all elements of the type `string,null`.
  - `permittedCompanies` (array,null)
  - `permittedUsers` (array,null)
  - `availableFrom`
  - `notifyWhenAvailable` (boolean)
  - `availableUntil`
- `state` (string, enum)
This element must be one of the following enum values:
  * `auditRequired`
  * `auditRequested`
  * `disapproved`
  * `publishable`
  * `cloned`
  * `published`
  * `archived`
  * `scheduled`
- `auditNote` (string,null)
- `noteUpdateBy` (string,null)
- `isPublished` (boolean)
- `imageUrl` (string,null)
- `customFragments` (object,null)
- `contentEditVersion` (string,null)
- `contentEditedBy` (string,null)
- `contentEditedAt`
- `contentPublishedVersion` (string,null)
- `contentPublishedBy` (string,null)
- `contentPublishedAt`
- `contentApprovedVersion` (string,null)
- `contentApprovedBy` (string,null)
- `contentApprovedAt`
- `shouldUseWebsiteWidgets` (boolean)
- `language` (string,null)
- `isTemplate` (boolean)