package com.oficinabr.rail.services;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.oficinabr.rail.dto.WorkshopDTO;
import com.oficinabr.rail.entity.Workshop;
import com.oficinabr.rail.repository.WorkshopRepository;

import jakarta.servlet.ServletContext;

@Service
public class WorkshopService {
	@Autowired
	private WorkshopRepository repository;
	
	@Autowired
	ServletContext context;
	
	@Value("${api.logo.path}")
	String logoFilePath;
		
	public ResponseEntity<List<WorkshopDTO> > findAll() {
		
		try {
			List<WorkshopDTO> resp = repository.findAll().stream().map(WorkshopDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> find(String id) {	
		
		try {
			WorkshopDTO resp = repository.findById(id).stream().map(WorkshopDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> save(WorkshopDTO dto) {
		try {
			Workshop workshop = new Workshop(dto);
			WorkshopDTO resp = new WorkshopDTO(repository.save(workshop));	
		return ResponseEntity.ok(resp);	
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> update(WorkshopDTO dto) {
		try {
			Workshop workshop = new Workshop(dto);
			WorkshopDTO resp = new WorkshopDTO(repository.save(workshop));
			return ResponseEntity.ok(resp);	
		} catch (DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> delete(String id) {	
		try {
			Workshop workshop = repository.findById(id).get();
			repository.delete(workshop);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}	
	
	public ResponseEntity<WorkshopDTO> upload(String id, MultipartFile file) {
		try {	
			String real_path = logoFilePath;
			String file_name = "logo." + id + "." + getExtension(file);
			String logo_path = real_path + file_name;
			System.out.println(logo_path);
			
			try {
				Files.copy(file.getInputStream(), Path.of(logo_path), StandardCopyOption.REPLACE_EXISTING);
				Workshop workshop = repository.findById(id).get();
				workshop.setLogo(file_name);
				repository.save(workshop);
				return ResponseEntity.ok(new WorkshopDTO(workshop));
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.noContent().build();
			}
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	private String getExtension(MultipartFile file) {
		String name = file.getOriginalFilename();
		int index = name.lastIndexOf(".");
		return name.substring(index+1);
	}
	
//	public ResponseEntity<?> download(String id) {
//		FileDownloadUtil downloadUtil = new FileDownloadUtil();
//		
//		Resource resource = null;
//		
//		try {          
//			resource = downloadUtil.getFileAsResource(id);
//		} catch (IOException e) {
//			return ResponseEntity.internalServerError().build();
//		}
//		
//        if (resource == null) {
//            return new ResponseEntity<>("File not found", HttpStatus.NOT_FOUND);
//        }
//         
//        String contentType = "application/octet-stream";
//        String headerValue = "attachment; filename=\"" + resource.getFilename() + "\"";
//         
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(contentType))
//                .header(HttpHeaders.CONTENT_DISPOSITION, headerValue)
//                .body(resource);
//	}
}
